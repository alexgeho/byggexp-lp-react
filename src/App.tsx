import CTA from "./components/CTA/CTA";
import FinalBenefits from "./components/FinalBenefits/FinalBenefits";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturesDark from "./components/Features/FeaturesDark";
import FeaturesLight from "./components/Features/FeaturesLight";
import Pricing from "./components/Pricing/Pricing";
import Why from "./components/Why/Why";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { headerTranslations } from "./locales/header"
import { whyTranslations } from "./locales/why"
import { heroTranslations } from "./locales/hero"
import { benefitsTranslations } from "./locales/benefits"
import { featuresTranslations } from "./locales/featuresDark"
import { featuresLightTranslations } from "./locales/featuresLight"
import { finalBenefitsTranslations } from "./locales/finalBenefits"
import { pricingTranslations } from "./locales/pricing"
import { ctaTranslations } from "./locales/CTA"
import { footerTranslations } from "./locales/footer"
import Benefits from "./components/Benefits/Benefits";

function HomePage() {
  const { lang = "sv" } = useParams();


  const headerT = headerTranslations[lang as keyof typeof headerTranslations] || headerTranslations.sv;
  const whyT = whyTranslations[lang as keyof typeof whyTranslations] || whyTranslations.sv;
  const heroT = heroTranslations[lang as keyof typeof heroTranslations] || heroTranslations.sv;
  const benefitsT = benefitsTranslations[lang as keyof typeof benefitsTranslations] || benefitsTranslations.sv;
  const featuresT = featuresTranslations[lang as keyof typeof featuresTranslations] || featuresTranslations.sv;
  const featuresLightT = featuresLightTranslations[lang as keyof typeof featuresTranslations] || featuresTranslations.sv;
  const finalBenefitsT = finalBenefitsTranslations[lang as keyof typeof finalBenefitsTranslations] || finalBenefitsTranslations.sv;
  const pricingT = pricingTranslations[lang as keyof typeof pricingTranslations] || pricingTranslations.sv;
  const ctaT = ctaTranslations[lang as keyof typeof ctaTranslations] || ctaTranslations.sv;
  const footerT = footerTranslations[lang as keyof typeof footerTranslations] || footerTranslations.sv;

  return (
    <>
      <Header headerT={headerT} />
      <Hero heroT={heroT}/>
      <Why whyT={whyT} />
      <Benefits benefitsT={benefitsT} />
      <FeaturesDark featuresT={featuresT} />
      <FeaturesLight featuresLightT={featuresLightT} />
      <FinalBenefits finalBenefitsT={finalBenefitsT} />
      <Pricing pricingT={pricingT}/>
      <CTA ctaT={ctaT}/>
      <Footer footerT={footerT}/>
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