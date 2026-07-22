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

          <button className="download-button">

            <FaDownload />

            {t("download.button")}

          </button>

          <div className="download-platform">

            <FaAndroid />

            <span>{t("download.platform")}</span>

          </div>

        </div>

      </div>

    </section>

  );

}