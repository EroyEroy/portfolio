import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export interface IAnimTextProps {
	text: string;
	delay: number;
}

const AnimText = ({ text, delay }: IAnimTextProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [done, setDone] = useState(false);
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

	useEffect(() => {
		const controls = animate(count, text.length, {
			type: "tween",
			delay: delay,
			duration: done ? 0 : 2,
			ease: "easeInOut",
			onComplete: () => {
				setDone(true);
			},
		});
		return controls.stop;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text, delay]);

	return (
		<span className="">
			<motion.span>{displayText}</motion.span>
		</span>
	);
};

export default AnimText;