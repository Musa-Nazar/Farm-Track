import { Link } from "react-router-dom"
import Hero from "./Hero"
import Gap from "./Gap"
import FeaturePreview from "./FeaturePreview"
import AboutPreview from "./AboutPreview"
import ServicesPreview from "./ServicesPreview"
import FAQ from "./FAQ"
function HomePage() {
  const xml = 
  <>
    <Hero/>
    <Gap/>
    <FeaturePreview/>
    <AboutPreview/>
    <ServicesPreview/>
    <FAQ/>
  </>
  return (xml)
}

export default HomePage