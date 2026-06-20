import BenefitsForOffice from "./components/Benefits/BenefitsForOffice";
import BenefitsForSite from "./components/Benefits/BenefitsForSite";
import Consequences from "./components/Consequences/Consequences";
import CTA from "./components/CTA/CTA";
import FinalBenefits from "./components/FinalBenefits/FinalBenefits";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";
import Pain from "./components/Pain/Pain";
import Pricing from "./components/Pricing/Pricing";
import Why from "./components/Why/Why";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Why />
      <BenefitsForOffice />
      
      <BenefitsForSite />

      <Pain />
      <Consequences />

      <How />
      <FinalBenefits />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
