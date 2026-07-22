import "./Header.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "it",
    label: "Italiano",
    flag: "/flags/it.svg",
  },
  {
    code: "en",
    label: "English",
    flag: "/flags/gb.svg",
  },
  {
    code: "es",
    label: "Español",
    flag: "/flags/es.svg",
  },
  {
    code: "fr",
    label: "Français",
    flag: "/flags/fr.svg",
  },
];

export default function Header() {

  const { t, i18n } = useTranslation();

  const current =
    languages.find(l => l.code === i18n.language) || languages[0];

  const [open, setOpen] = useState(false);

  function changeLanguage(lang) {

    i18n.changeLanguage(lang.code);


    setOpen(false);

  }

  return (

    <header className="header">

      <div className="container header-content">

        <a href="/" className="logo">

          <img
            src="/logo.png"
            alt="FishingTrack"
          />

        </a>

        <div className="menu-wrapper">

          <nav className="menu">

            <a href="#features">
              {t("menu.features")}
            </a>

            <a href="#screenshots">
              {t("menu.screenshots")}
            </a>

            <a href="#beta">
              {t("menu.beta")}
            </a>

          </nav>

        </div>

        <div className="language">

          <button
            className="language-button"
            onClick={() => setOpen(!open)}
          >

<img
  src={current.flag}
  className="flag"
  alt=""
/>

<span className="language-code">
  {current.code.toUpperCase()}
</span>

<span className="arrow">▼</span>

          </button>

          {open && (

            <div className="language-menu">

              {languages.map(lang => (

                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang)}
                >

                  <img
                    src={lang.flag}
                    className="flag"
                    alt=""
                  />

                  {lang.label}

                </button>

              ))}

            </div>

          )}

        </div>

      </div>

    </header>

  );

}