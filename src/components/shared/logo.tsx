"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"

export default function Logo({ state, className }: { state: boolean; className: string | null }) {
	const [delayedState, setDelayedState] = useState(state)

	useEffect(() => {
		const timer = setTimeout(() => {
			setDelayedState(state)
		}, 100)

		return () => clearTimeout(timer)
	}, [state])

	return (
		<AnimatePresence mode="wait">
			{delayedState ? (
				<motion.div
					key="logo-active"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<Image
						src="/logo-active.png"
						alt="logo"
						width={40}
						height={40}
						className={cn(className)}
						priority
					/>
				</motion.div>
			) : (
				<motion.div
					key="logo"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<Image
						src="/logo.png"
						alt="logo"
						width={40}
						height={40}
						className={cn(className)}
						priority
					/>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
