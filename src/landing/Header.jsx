import { useState } from "react";
import "./styles/header.css";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  return (
    <header className="header">

      <div className="header-container">

        <div className="logo">

          <img src="/logo.png" alt="FishingTrack" />

          <div className="logo-text">
<h1>
  <span className="dark">Fishing</span>
  <span className="light">Track</span>
</h1>
            <span>Track Your Passion</span>
          </div>

        </div>

        <nav>

          <a href="#features">Features</a>

          <a href="#screenshots">Screenshots</a>

          <a href="#download">Download</a>

          <a href="#beta">Beta Program</a>

        </nav>

        <div className="language-selector">

          <button
            className="language-button"
            onClick={() => setOpen(!open)}
          >
            <span>{selected.flag}</span>

            {selected.label}

            <span>▼</span>
          </button>

          {open && (

            <div className="language-menu">

              {languages.map((language) => (

                <button
                  key={language.code}
                  onClick={() => {

                    setSelected(language);

                    setOpen(false);

                    // TODO: cambio lingua

                  }}
                >

                  <span>{language.flag}</span>

                  {language.label}

                </button>

              ))}

            </div>

          )}

        </div>

      </div>

    </header>
  );
}