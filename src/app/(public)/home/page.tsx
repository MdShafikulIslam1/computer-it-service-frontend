"use client";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import FAQPage from "@/components/HomePage/FAQ/FAQ";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import Loading from "@/components/LoadingComponent/LoadingComponent";
import ServicePage from "@/components/Service/ServicePage";
import { useGetAllServicesQuery } from "@/redux/api/servicesApi";
import { FloatButton, Row, Space, Spin } from "antd";

const HomePage = () => {
  const { data, isLoading } = useGetAllServicesQuery({ limit: 100, page: 1 });
  <Loading isLoading={isLoading} />;
  const services = data?.services;
  const itServices = services?.filter(
    (service: any) => service?.category?.title === "IT"
  );
  const softwareServices = services?.filter(
    (service: any) => service?.category?.title === "Software"
  );
  const computerHardwareServices = services?.filter(
    (service: any) => service?.category?.title === "Computer Hardware"
  );
  const laptopHardwareServices = services?.filter(
    (service: any) => service?.category?.title === "Laptop Hardware"
  );
  const networkServices = services?.filter(
    (service: any) => service?.category?.title === "Network"
  );

  const meta = data?.meta;
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <AboutUs />
      {/* it services */}
      <ServicePage
        data={itServices}
        title="IT service"
        description="The kind of IT services we provide to your"
      />
      {/* Software services */}
      <ServicePage
        data={softwareServices}
        title="Software service"
        description="The kind of Software services we provide to your"
      />
      {/* Computer services */}
      <ServicePage
        data={computerHardwareServices}
        title="Computer service"
        description="The kind of Computer  services we provide to your"
      />
      {/* Laptop services */}
      <ServicePage
        data={laptopHardwareServices}
        title="Laptop  service"
        description="The kind of Laptop  services we provide to your"
      />
      {/* Network services */}
      <ServicePage
        data={networkServices}
        title="Network service"
        description="The kind of Network services we provide to your"
      />
      <FAQPage />
      <FloatButton.BackTop style={{ color: "blue" }} />
    </div>
  );
};

export default HomePage;
