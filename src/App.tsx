import CTA from "./components/CTA/CTA";
import FinalBenefits from "./components/FinalBenefits/FinalBenefits";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Pain from "./components/Pain/Pain";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { headerTranslations } from "./locales/header"
import { painTranslations } from "./locales/pain"
import { heroTranslations } from "./locales/hero"
import { benefitsTranslations } from "./locales/benefits"
import { featuresTranslations1_3 } from "./locales/features1-3"
import { featuresTranslations4_6 } from "./locales/features4-6"
import { featuresTranslations7_9 } from "./locales/features7-9"
import { finalBenefitsTranslations } from "./locales/finalBenefits"
import { pricingTranslations } from "./locales/pricing"
import { ctaTranslations } from "./locales/CTA"
import { footerTranslations } from "./locales/footer"
import Benefits from "./components/Benefits/Benefits";
import Features from "./components/Features/Features";

function HomePage() {
  const { lang = "sv" } = useParams();


  const headerT = headerTranslations[lang as keyof typeof headerTranslations] || headerTranslations.sv;
  const painT = painTranslations[lang as keyof typeof painTranslations] || painTranslations.sv;
  const heroT = heroTranslations[lang as keyof typeof heroTranslations] || heroTranslations.sv;
  const benefitsT = benefitsTranslations[lang as keyof typeof benefitsTranslations] || benefitsTranslations.sv;
  const featuresT1_3 = featuresTranslations1_3[lang as keyof typeof featuresTranslations1_3] || featuresTranslations1_3.sv;
  const featuresT4_6 = featuresTranslations4_6[lang as keyof typeof featuresTranslations4_6] || featuresTranslations4_6.sv;
  const featuresT7_9 = featuresTranslations7_9[lang as keyof typeof featuresTranslations7_9] || featuresTranslations7_9.sv;
  const finalBenefitsT = finalBenefitsTranslations[lang as keyof typeof finalBenefitsTranslations] || finalBenefitsTranslations.sv;
  const pricingT = pricingTranslations[lang as keyof typeof pricingTranslations] || pricingTranslations.sv;
  const ctaT = ctaTranslations[lang as keyof typeof ctaTranslations] || ctaTranslations.sv;
  const footerT = footerTranslations[lang as keyof typeof footerTranslations] || footerTranslations.sv;

  return (
    <>
      <Header headerT={headerT} />
      <Hero heroT={heroT}/>
      <Pain painT={painT} />
      <Benefits benefitsT={benefitsT} />
      <Features 
      featuresT1_3={featuresT1_3}
      featuresT4_6={featuresT4_6}
      featuresT7_9={featuresT7_9}
       />
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