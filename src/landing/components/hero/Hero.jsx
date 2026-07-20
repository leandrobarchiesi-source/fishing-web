import "./Hero.css";
import { useTranslation } from "react-i18next";

export default function Hero() {

  const { t } = useTranslation();

  return (

    <section className="hero">

      <div className="container hero-content">

        <div className="hero-left">

          <span className="hero-badge">

            {t("hero.badge")}

          </span>

          <h1>

            {t("hero.title")}

          </h1>

          <h2>

            {t("hero.subtitle")}

          </h2>

          <p>

            {t("hero.description")}

          </p>

          <button className="download-button">

            ⬇ {t("hero.download")}

          </button>

        </div>

        <div className="hero-right">

          <div className="phone">

            <img
              src="/images/dashboard.png"
              alt="FishingTrack Dashboard"
            />

          </div>

        </div>

      </div>

    </section>

  );

}