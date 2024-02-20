import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Portfolio() {
	const { t } = useTranslation();
	const portfolio = [
		{
			name: t("MOTODAROM"),
			link: "https://eroyeroy.github.io/motodarom/",
		},
		{
			name: t("RENTON"),
			link: "https://eroyeroy.github.io/roll-shop/",
		},
		{
			name: t("SWEETS LAB"),
			link: "https://eroyeroy.github.io/baking-shop/",
		},
		{
			name: t("7BOLT"),
			link: "https://eroyeroy.github.io/7bolt-Landing/",
		},
		{
			name: t("CONVERSE"),
			link: "https://eroyeroy.github.io/Converse-promo/",
		},
		{
			name: t("NIRVANA"),
			link: "https://eroyeroy.github.io/nirvana-music-player/",
		},
		{
			name: t("ROONGO"),
			link: "https://eroyeroy.github.io/Roongo/",
		},
		{
			name: t("MED CT"),
			link: "https://eroyeroy.github.io/medical-company/",
		},
		{
			name: t("MUSEUM"),
			link: "https://eroyeroy.github.io/museum/",
		},
		{
			name: t("TSPK"),
			link: "http://h96497tm.beget.tech/kursach/index.php?page=1",
		},
	];

	return (
		<motion.div
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
			className="portfolio__cards">
			{portfolio.reverse().map((el, index) =>
				<div className="portfolio__card" key={index}>
					{el.name}
					<Link className="portfolio__cardBody" to={el.link} target="_blank" rel="noopener">{t("VIEW")}!!!</Link>
				</div>
			)}
		</motion.div>
	)
}