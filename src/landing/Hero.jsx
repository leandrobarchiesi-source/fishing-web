

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h1>FishingTrack</h1>

        <h2>Track Every Fishing Adventure</h2>

        <p>
          Record every fishing session, save your favourite fishing spots
          and synchronize your data securely.
        </p>

        <button className="download-button">
          Download Beta
        </button>

        <div className="hero-info">

          <div className="info-card">
            <span className="icon">📴</span>
            <strong>Offline</strong>
            <small>Ready</small>
          </div>

          <div className="info-card">
            <span className="icon">☁️</span>
            <strong>Cloud</strong>
            <small>Sync</small>
          </div>

          <div className="info-card">
            <span className="icon">🤖</span>
            <strong>Android</strong>
            <small>Beta 1.0</small>
          </div>

        </div>

      </div>

      <div className="hero-image">

        📱

      </div>

    </section>
  );
}