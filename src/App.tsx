import BenefitsForOffice from "./components/Benefits/BenefitsForOffice";
import BenefitsForSite from "./components/Benefits/BenefitsForSite";
import CTA from "./components/CTA/CTA";
import FinalBenefits from "./components/FinalBenefits/FinalBenefits";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowDark from "./components/How/HowDark";
import HowLight from "./components/How/HowLight";
import Pricing from "./components/Pricing/Pricing";
import Why from "./components/Why/Why";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { translations } from "./locales/translations";

function HomePage() {
  const { lang = "sv" } = useParams();

  const t = translations[lang as keyof typeof translations] || translations.sv;

  return (
    <>
      <Header t={t} />
      <Hero />
      <Why />
      <BenefitsForOffice />
      <BenefitsForSite />
      <HowDark />
      <HowLight />
      <FinalBenefits />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
  <Routes>
  <Route path="/" element={<Navigate to="/sv" replace />} />
  <Route path="/:lang" element={<HomePage />} />
</Routes>
  );
}

export default App;