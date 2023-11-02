'use client'
import Overlay from "@/components/Overlay/Overlay";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import { usePathname } from 'next/navigation'

const AboutPage = () => {
  const pathname = usePathname()
  console.log(pathname);
  return (
    <>
      <Overlay heading="About Us" currentPageTitle="about us" />
      <AboutUs />
    </>
  );
};

export default AboutPage;
