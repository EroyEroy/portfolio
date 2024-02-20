import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Skills() {
	const { t } = useTranslation();
	const skills = [t("HTML"), t("CSS"), t("SCSS"), t("JAVASCRIPT"), t("TYPESCRIPT"), t("REACT"), t("REDUX TOOLKIT"), t("WEBPACK"), t("GULP"), t("VITE")];

	return (
		<motion.div
			className="portfolio__skills"
			initial={{
				y: -30,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				delay: 0,
				duration: 1,
			}}
		>
			{skills.map((el, index) =>
				<div className="portfolio__skill" key={index}>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.55556 0H0V32H32V0H3.55556ZM3.55556 3.55556H28.4444V28.4444H3.55556V3.55556ZM10.6667 16H7.11111V19.5556H10.6667V23.1111H14.2222V19.5556H17.7778V16H21.3333V12.4444H24.8889V8.88889H21.3333V12.4444H17.7778V16H14.2222V19.5556H10.6667V16Z" fill="#24F29C" />
					</svg>
					<span>{el}</span>
				</div>
			)}
		</motion.div>
	)
}