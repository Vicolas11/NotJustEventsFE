import VendorCategory from "../components/VendorCategory";
import MobileAdvert from "../components/MobileAdvert";
import KeyFeatures from "../components/KeyFeatures";
import PageFooter from "../components/PageFooter";
import HowItWorks from "../components/HowItWorks";
import Testimony from "../components/Testimony";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useEffect } from "react";

const LandingPage = () => {

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <KeyFeatures />
      <VendorCategory />
      <Testimony />
      <MobileAdvert />
      <PageFooter />
    </>
  );
};

export default LandingPage;
