import Overlay from "@/components/Overlay/Overlay";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
const AboutPage = () => {
  return (
    <>
      <Overlay heading="About Us" currentPageTitle="about us" />
      <AboutUs />
    </>
  );
};

export default AboutPage;
