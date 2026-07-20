import "./styles/landing.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import Screenshots from "./Screenshots";
import Download from "./Download";
import Footer from "./Footer";

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