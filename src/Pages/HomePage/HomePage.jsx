import { Link } from "react-router-dom";
import Hero from "./Hero";
import Gap from "./Gap";
import FeaturePreview from "./FeaturePreview";
import AboutPreview from "./AboutPreview";
import FAQ from "./FAQ";
import Services from "./Services";
function HomePage() {
  const xml = (
    <>
      <Hero />
      <Gap />
      <FeaturePreview />
      <AboutPreview />
      <Services />
      <FAQ />
    </>
  );
  return xml;
}

export default HomePage;
