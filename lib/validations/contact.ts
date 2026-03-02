import { z } from "zod";

const emailFormatSchema = z.email();

export const contactSchema = z.object({
	name: z.string().trim().min(1, "Name is required"),
	email: z
		.string()
		.trim()
		.superRefine((value, ctx) => {
			if (!value) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Email is required",
				});
				return;
			}

			if (!emailFormatSchema.safeParse(value).success) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "Please provide a valid email address",
				});
			}
		}),
	message: z
		.string()
		.trim()
		.min(1, "Message is required")
		.max(5000, "Message must be 5000 characters or less"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
