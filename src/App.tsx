import BenefitsForOffice from "./components/Benefits/BenefitsForOffice";
import BenefitsForSite from "./components/Benefits/BenefitsForSite";

import CTA from "./components/CTA/CTA";
import FinalBenefits from "./components/FinalBenefits/FinalBenefits";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowDark from "./components/How/HowDark";
import HowLight from "./components/How/HowLight";
import How from "./components/How/HowLight";
import Pricing from "./components/Pricing/Pricing";
import Why from "./components/Why/Why";
/* 
import Pain from "./components/Pain/Pain";
import Consequences from "./components/Consequences/Consequences"; */

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Why />
      <BenefitsForOffice />
      
      <BenefitsForSite />

{/* 
      <Pain />
      <Consequences /> */}

      <HowDark />
      <HowLight />


      <FinalBenefits />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
