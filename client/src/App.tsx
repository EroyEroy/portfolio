import { Link } from "react-router-dom";
import GridMask from "./components/GridMask";
import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import { useTranslation } from "react-i18next";
import useLocalStorage from "./hooks/useLocalStorage";
import i18n from "./i18n";
import TypingAnimation from "./components/TypingAnimation";
import { motion } from "framer-motion";

export default function App() {
  const [isPortfolio, setIsPortfolio] = useState<boolean>(true);
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ru");
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleLanguageChange = () => {
    if (!isClicked) { return; }
    if (language === "en") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    } else if (language === "ru") {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
    setShouldAnimate(false);
  }

  useEffect(() => {
    if (!language) {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    }
  }, [language, setLanguage]);

  return (
    <>
      <button className="changeLang" onClick={handleLanguageChange}>
        {language === "ru" ? t("ENG") : t("RUS")}
      </button>
      <GridMask />
      <section className="portfolio">
        <div className="container">
          <div className="portfolio__inner">
            <motion.div
              initial={{
                opacity: 0,
                display: "none"
              }}
              animate={{
                opacity: 1,
                display: ""
              }}
              transition={{
                duration: 2
              }}
              className="portfolio__avatar"
            >
              <img src="https://sun9-30.userapi.com/impg/_9JIqXcXUeJ2uXFRacsh6IMHlNzjXuWQz4SxZA/gB3m5RPKpZ4.jpg?size=2560x2560&quality=95&sign=c4719d3e82de04f32dd82c49fc2d9a49&type=album" alt="avatar" />
            </motion.div>
            <h1 className="portfolio__title title"><TypingAnimation text={t("Tersenev Vladislav")} delay={0} /></h1>
            <h5 className="portfolio__subtitle subtitle"><TypingAnimation text={t("Frontend – developer")} delay={shouldAnimate ? 1.8 : 0} /></h5>
            <div className="portfolio__social">
              <Link className="button" target="_blank" to="https://t.me/EroyEroy" rel="noopener">
                <TypingAnimation text={t("Telegram")} delay={3.3} />
              </Link>
              <Link className="button" target="_blank" to="https://vk.com/eroyu" rel="noopener">
                <TypingAnimation text={t("VK")} delay={4.5} />
              </Link>
              <Link className="button" target="_blank" to="https://github.com/EroyEroy" rel="noopener">
                <TypingAnimation text={t("GitHub")} delay={5.5} />
              </Link>
            </div>
            <motion.div
              initial={{
                y: -30,
                opacity: 0,
                display: "none"
              }}
              animate={{
                y: 0,
                opacity: 1,
                display: ""
              }}
              transition={{
                delay: 7.1,
                duration: 1,
              }}
              className="portfolio__tabs tabs"
            >
              <button
                className={`tabs__button button${isPortfolio ? " active" : ""}`}
                type="button"
                onClick={() => setIsPortfolio(true)}
              >{t("Portfolio")}</button>
              <button
                className={`tabs__button button${!isPortfolio ? " active" : ""}`}
                type="button"
                onClick={() => setIsPortfolio(false)}
              >{t("Skills")}</button>
            </motion.div>
            <motion.div
              initial={{
                y: -30,
                opacity: 0,
                display: "none"
              }}
              animate={{
                y: 0,
                opacity: 1,
                display: "",
              }}
              transition={{
                delay: 8,
                duration: 1,
                onComplete: () => {
                  setIsClicked(true);
                }
              }}
              style={{ width: isPortfolio ? "100%" : "auto" }}
            >
              {isPortfolio
                ? <Portfolio />
                : <Skills />
              }
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}