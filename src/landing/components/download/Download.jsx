import "./Download.css";
import { useTranslation } from "react-i18next";
import { FaAndroid, FaDownload } from "react-icons/fa";

export default function Download() {

  const { t } = useTranslation();

  return (

    <section id="download" className="download">

      <div className="container">

        <div className="download-card">

          <span className="download-badge">
            {t("download.badge")}
          </span>

          <h2>
            {t("download.title")}
          </h2>

          <p>
            {t("download.description")}
          </p>

<a
  href="https://github.com/leandrobarchiesi-source/fishing-web/releases/download/v1.0.0-beta1/FishingTrack_Beta.apk"
  className="download-button"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaDownload />
  {t("download.button")}
</a>
          <div className="download-platform">

            <FaAndroid />

            <span>{t("download.platform")}</span>

          </div>

        </div>

      </div>

    </section>

  );

}