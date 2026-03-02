import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENT_EMAIL = "cdrcangulo@gmail.com";

const store = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_MAX = 3; // max submissions per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getIp(req: NextRequest): string {
	return (
		req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
		req.headers.get("x-real-ip") ??
		"unknown"
	);
}

function checkRateLimit(ip: string): { allowed: boolean; remainingMs: number } {
	const now = Date.now();
	const entry = store.get(ip);

	if (!entry || now > entry.resetAt) {
		store.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
		return { allowed: true, remainingMs: 0 };
	}

	if (entry.count >= RATE_LIMIT_MAX) {
		return { allowed: false, remainingMs: entry.resetAt - now };
	}

	entry.count += 1;
	return { allowed: true, remainingMs: 0 };
}

export async function POST(req: NextRequest) {
	const ip = getIp(req);
	const { allowed, remainingMs } = checkRateLimit(ip);

	if (!allowed) {
		const minutes = Math.ceil(remainingMs / 60_000);
		return NextResponse.json(
			{
				error: `Too many messages. Try again in ${minutes} minute${minutes !== 1 ? "s" : ""}.`,
			},
			{ status: 429 }
		);
	}

	const body = await req.json();
	const parseResult = contactSchema.safeParse(body);

	if (!parseResult.success) {
		const firstIssue = parseResult.error.issues[0];
		return NextResponse.json(
			{
				error: firstIssue?.message ?? "Please provide valid input.",
				issues: parseResult.error.issues,
			},
			{ status: 400 }
		);
	}

	const { name, email, message } = parseResult.data;

	const result = await resend.emails.send({
		from: "Portfolio Contact <onboarding@resend.dev>",
		to: RECIPIENT_EMAIL,
		replyTo: email,
		subject: `Portfolio contact from ${name}`,
		text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
	});

	if (result.error) {
		console.error("resend error:", result.error);
		return NextResponse.json(
			{
				error:
					result.error.message ?? "Failed to send message. Please try again.",
			},
			{ status: 400 }
		);
	}

	return NextResponse.json({ success: true });
}
