import "./footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation();

  return (

    <footer className="footer">

      <div className="container footer-content">

        <span className="footer-logo">
          FishingTrack
        </span>

        <span className="footer-text">
          {t("footer.subtitle")}
        </span>

        <a
          className="footer-link"
          href="mailto:info@fishingtrack.app"
        >
          {t("footer.contact")}
        </a>

        <span className="footer-copy">
          © 2026 Leandro Barchiesi
        </span>

      </div>

    </footer>

  );

}