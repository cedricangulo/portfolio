"use client";

import { useState } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/animate-ui/tooltip";
import { CheckIcon, CopyIcon } from "@/public/icons";
import type { IColorScheme } from "../shared/interface/color-scheme";

export default function ColorScheme({
	content,
	color,
	textColor,
}: IColorScheme) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		if (navigator.clipboard?.writeText) {
			navigator.clipboard
				.writeText(content)
				.then(() => {
					setCopied(true);
					setTimeout(() => setCopied(false), 2000);
				})
				.catch((err) => {
					console.error("Failed to copy text: ", err);
				});
		} else {
			// Fallback for unsupported environments
			try {
				const textarea = document.createElement("textarea");
				textarea.value = content;
				textarea.style.position = "fixed";
				textarea.style.opacity = "0";
				document.body.appendChild(textarea);
				textarea.focus();
				textarea.select();
				const successful = document.execCommand("copy");
				if (successful) {
					setCopied(true);
					setTimeout(() => setCopied(false), 2000);
				} else {
					console.error("Fallback: Failed to copy text");
				}
				document.body.removeChild(textarea);
			} catch (err) {
				console.error("Fallback: Failed to copy text: ", err);
			}
		}
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<button
						type="button"
						onClick={handleCopy}
						className={`${color} flex items-center justify-center relative h-8 w-full cursor-pointer group`}
					>
						{copied ? (
							<CheckIcon colorScheme={textColor} />
						) : (
							<CopyIcon colorScheme={textColor} />
						)}
					</button>
				</TooltipTrigger>
				<TooltipContent>{content}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
