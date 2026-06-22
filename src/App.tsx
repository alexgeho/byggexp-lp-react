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
import { Routes, Route, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function HomePage() {
  const { lang } = useParams();

  console.log(lang);

  return (
    <>
      <Header />
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
      <Route
        path="/byggexp-lp-react/"
        element={<Navigate to="/sv" replace />}
      />
      <Route path="/byggexp-lp-react/sv" element={<HomePage />} />
      <Route path="/byggexp-lp-react/en" element={<HomePage />} />
      <Route path="/byggexp-lp-react/ru" element={<HomePage />} />
    </Routes>
  );
}

export default App;
