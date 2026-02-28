"use client";

import { useEffect } from "react";

export default function ScrollReset() {
	useEffect(() => {
		const resetScroll = () => {
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;
		};

		resetScroll();
		const frame = window.requestAnimationFrame(resetScroll);

		return () => {
			window.cancelAnimationFrame(frame);
		};
	}, []);

	return null;
}
