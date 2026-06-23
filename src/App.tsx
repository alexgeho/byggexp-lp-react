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
import { headerTranslations } from "./locales/header"
import { whyTranslations } from "./locales/why"
import { heroTranslations } from "./locales/hero"
import { benefitsOfficeTranslations } from "./locales/benefitsOffice"
import { benefitsSiteTranslations } from "./locales/benefitsSite"

function HomePage() {
  const { lang = "sv" } = useParams();


  const headerT = headerTranslations[lang as keyof typeof headerTranslations] || headerTranslations.sv;
  const whyT = whyTranslations[lang as keyof typeof whyTranslations] || whyTranslations.sv;
  const heroT = heroTranslations[lang as keyof typeof heroTranslations] || heroTranslations.sv;
  const benefitsOfficeT = benefitsOfficeTranslations[lang as keyof typeof benefitsOfficeTranslations] || benefitsOfficeTranslations.sv;
  const benefitsSiteT = benefitsSiteTranslations[lang as keyof typeof benefitsSiteTranslations] || benefitsSiteTranslations.sv;

  return (
    <>
      <Header headerT={headerT} />
      <Hero heroT={heroT}/>
      <Why whyT={whyT} />
      <BenefitsForOffice benefitsOfficeT={benefitsOfficeT} />
      <BenefitsForSite benefitsSiteT={benefitsSiteT} />
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