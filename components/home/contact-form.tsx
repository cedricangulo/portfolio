"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { easeOut } from "motion";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sileo } from "sileo";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { lexend } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
	type ContactFormValues,
	contactSchema,
} from "@/lib/validations/contact";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const getMotionProps = (delay: number = 0) => ({
	initial: { opacity: 0, y: 20, filter: "blur(4px)" },
	whileInView: { opacity: 1, y: 0, filter: "blur(0)" },
	viewport: { once: false, amount: 0.3 },
	transition: { duration: 0.5, ease: easeOut, delay },
});

export const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const form = useForm<ContactFormValues>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
		mode: "onBlur", // Validate on blur for better UX
	});

	const onSubmit = async (values: ContactFormValues) => {
		setIsSubmitting(true);

		try {
			const fetchPromise = fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			}).then(async (res) => {
				const data = (await res.json()) as {
					success?: boolean;
					error?: string;
				};

				if (res.ok && data.success) {
					form.reset();
					return data;
				}
				throw new Error(data.error ?? "Something went wrong");
			});

			await sileo.promise(fetchPromise, {
				loading: { title: "Sending your message..." },
				success: {
					title: "Message sent!",
					description: "Thanks for reaching out. I'll reply soon.",
					fill: "#f3e8ff",
					styles: {
						title: "text-purple-500!",
						description: "text-purple-500!",
					},
				},
				error: (err) => ({
					title: "Failed to send",
					description: err instanceof Error ? err.message : "Please try again.",
					fill: "#fff0f0",
					styles: {
						title: "text-red-500!",
						description: "text-red-500!",
					},
				}),
			});
		} catch (error) {
			sileo.error({
				title: "Validation error",
				description:
					error instanceof Error
						? error.message
						: "An unexpected error occurred.",
				fill: "#fff0f0",
				styles: {
					title: "text-red-500!",
					description: "text-red-500!",
				},
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="w-full">
			<motion.div {...getMotionProps(0)} className="w-full">
				<h2
					className={cn(
						"text-foreground text-center lg:text-left text-5xl font-extrabold tracking-tight leading-none uppercase",
						lexend.className
					)}
				>
					Contact
				</h2>
				<p className="text-foreground text-center lg:text-left text-xl font-normal mt-1">
					Let&apos;s build something together
				</p>
			</motion.div>

			<div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
				{/* Left: info */}
				<motion.div {...getMotionProps(0.1)} className="flex flex-col gap-6">
					<p className="text-muted-foreground text-base leading-relaxed max-w-sm">
						Have a project idea, a question, or just want to say hello? Fill out
						the form and I&apos;ll get back to you as soon as I can.
					</p>
					<div className="flex flex-col gap-3">
						<ContactInfoItem
							label="GitHub"
							value="github.com/cedricangulo"
							href="https://github.com/cedricangulo"
						/>
						<ContactInfoItem
							label="Facebook"
							value="facebook.com/cedricangulo.21"
							href="https://www.facebook.com/cedricangulo.21"
						/>
					</div>
				</motion.div>

				{/* Right: form */}
				<motion.div {...getMotionProps(0.2)}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-5 bg-card/40 backdrop-blur-sm"
					>
						<FieldGroup>
							{/* Name and Email - Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<Field data-invalid={!!form.formState.errors.name}>
									<FieldLabel htmlFor="name">Name</FieldLabel>
									<Input
										id="name"
										type="text"
										placeholder="Your name"
										disabled={isSubmitting}
										{...form.register("name")}
									/>
									{form.formState.errors.name ? (
										<FieldError>
											{form.formState.errors.name.message}
										</FieldError>
									) : null}
								</Field>

								<Field data-invalid={!!form.formState.errors.email}>
									<FieldLabel htmlFor="email">Email</FieldLabel>
									<Input
										id="email"
										type="email"
										placeholder="your@email.com"
										disabled={isSubmitting}
										{...form.register("email")}
									/>
									{form.formState.errors.email ? (
										<FieldError>
											{form.formState.errors.email.message}
										</FieldError>
									) : null}
								</Field>
							</div>

							{/* Message */}
							<Field data-invalid={!!form.formState.errors.message}>
								<FieldLabel htmlFor="message">Message</FieldLabel>
								<Textarea
									id="message"
									placeholder="Tell me about your project or just say hi..."
									rows={5}
									maxLength={5000}
									disabled={isSubmitting}
									className="resize-none"
									{...form.register("message")}
								/>
								{form.formState.errors.message ? (
									<FieldError>
										{form.formState.errors.message.message}
									</FieldError>
								) : null}
							</Field>
						</FieldGroup>

						<Button
							type="submit"
							size="lg"
							disabled={isSubmitting || form.formState.isSubmitting}
							className="w-full sm:w-auto self-end"
						>
							Send message
						</Button>
					</form>
				</motion.div>
			</div>
		</div>
	);
};

function ContactInfoItem({
	label,
	value,
	href,
}: {
	label: string;
	value: string;
	href: string;
}) {
	return (
		<div className="flex items-center gap-3">
			<span className="text-xs font-medium uppercase tracking-wider text-muted-foreground w-20 shrink-0">
				{label}
			</span>
			<Button variant="link" asChild className="p-0 h-auto">
				<Link href={href} target="_blank" rel="noopener noreferrer">
					{value}
				</Link>
			</Button>
		</div>
	);
}

ContactForm.displayName = "ContactForm";
