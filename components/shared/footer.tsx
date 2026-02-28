import Image from "next/image";
import Link from "next/link";
import { FacebookFilledIcon, GithubFilledIcon } from "@/public/icons";

export default function Footer() {
	return (
		<footer className="max-h-[9rem] flex items-center justify-center gap-2 min-h-24 flex-col py-8 bg-transparent text-sm">
			<div className="inline-flex gap-4 sec-text">
				<Link
					href="https://github.com/cedricangulo"
					target="_blank"
					aria-label="GitHub icon"
				>
					<span className="sr-only">GitHub icon</span>
					<GithubFilledIcon
						className="stroke-current fill-current w-6 h-6"
						strokeWidth={1}
					/>
				</Link>
				<Link
					href="https://www.facebook.com/cedricangulo.21"
					target="_blank"
					aria-label="Facebook icon"
				>
					<span className="Facebook icon"></span>
					<FacebookFilledIcon className="fill-current h-6 1-6" />
				</Link>
			</div>
			<div className="flex flex-col items-center gap-1">
				<p className="leading-normal pri-text">Powered by </p>
				<Link
					target="_blank"
					href="https://nextjs.org/"
					className="w-full h-full grid place-items-center"
				>
					<Image
						width={60}
						height={18}
						src="/next.svg"
						alt="Nextjs Logo"
						className="w-auto h-auto relative dark:invert dark:drop-shadow-[0_0_0.3rem_#ffffff80]"
					/>
				</Link>
			</div>
		</footer>
	);
}
