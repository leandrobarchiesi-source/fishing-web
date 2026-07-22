import "./styles/landing.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Screenshots from "./components/screenshots/Screenshots";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";

export default function LandingPage() {
  return (
    <>

      <Header />

      <Hero />

      <Features />

      <Screenshots />

      <Download />

      <Footer />

    </>
  );
}