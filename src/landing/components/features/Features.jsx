import "./Features.css";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaFish } from "react-icons/fa";
import { FaCloud } from "react-icons/fa6";
import { WiDayCloudy } from "react-icons/wi";

export default function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="features">

      <div className="container">

        <div className="features-title">
          <span>{t("features.badge")}</span>

          <h2>{t("features.title")}</h2>

          <p>{t("features.subtitle")}</p>
        </div>

        {/* ======================================================
            FEATURE 1
        ====================================================== */}

        <div className="feature">

          <div className="feature-text">

            <div className="feature-icon">
              <WiDayCloudy />
            </div>


            <span className="feature-small">
              {t("features.spots.badge")}
            </span>

            <h3>{t("features.spots.title")}</h3>

            <p>{t("features.spots.description")}</p>

          </div>

          <div className="feature-image">

            <div className="phone">
              <img
                src="/images/features/session-summary.png"
                alt={t("features.spots.title")}
              />
            </div>

          </div>

        </div>

        {/* ======================================================
            FEATURE 2
        ====================================================== */}

        <div className="feature reverse">

          <div className="feature-image">

            <div className="phone">
              <img
                src="/images/features/new-session.png"
                alt={t("features.session.title")}
              />
            </div>

          </div>

          <div className="feature-text">

            <div className="feature-icon">
              <FaFish />
            </div>

            <span className="feature-small">
              {t("features.session.badge")}
            </span>

            <h3>{t("features.session.title")}</h3>

            <p>{t("features.session.description")}</p>

          </div>

        </div>

        {/* ======================================================
            FEATURE 3
        ====================================================== */}

        <div className="feature">

          <div className="feature-text">

            <div className="feature-icon">
              <FaCloud />
            </div>

            <span className="feature-small">
              {t("features.cloud.badge")}
            </span>

            <h3>{t("features.cloud.title")}</h3>

            <p>{t("features.cloud.description")}</p>

          </div>

          <div className="feature-image">

            <div className="phone">
              <img
                src="/images/features/cloud-backup.png"
                alt={t("features.cloud.title")}
              />
            </div>

          </div>

        </div>

        {/* ======================================================
            FEATURE 4
        ====================================================== */}

        <div className="feature reverse">

          <div className="feature-image">

            <div className="phone">
<img
    src="/images/features/spots.png"
    alt={t("features.spotsManager.title")}
/>
            </div>

          </div>

          <div className="feature-text">

            <div className="feature-icon">
              <FaMapMarkerAlt />
            </div>

<span className="feature-small">
    {t("features.spotsManager.badge")}
</span>

<h3>
    {t("features.spotsManager.title")}
</h3>

<p>
    {t("features.spotsManager.description")}
</p>          </div>

        </div>

      </div>

    </section>
  );
}