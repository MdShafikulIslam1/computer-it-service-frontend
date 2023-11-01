"use client";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import FAQPage from "@/components/HomePage/FAQ/FAQ";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import { FloatButton } from "antd";

import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import Loading from "@/app/loading";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
import PrimaryButton from "@/components/PrimaryButton/PrimaryButton";

const HomePage = () => {
  const { data, isLoading } = useGetAllCategoriesQuery({ limit: 100, page: 1 });
  if (isLoading) <Loading />;
  const categories = data?.categories;

  // const services = data?.services;
  // const itServices = services?.filter(
  //   (service: any) => service?.category?.title === "IT"
  // );
  // const softwareServices = services?.filter(
  //   (service: any) => service?.category?.title === "Software"
  // );
  // const computerHardwareServices = services?.filter(
  //   (service: any) => service?.category?.title === "Computer Hardware"
  // );
  // const laptopHardwareServices = services?.filter(
  //   (service: any) => service?.category?.title === "Laptop Hardware"
  // );
  // const networkServices = services?.filter(
  //   (service: any) => service?.category?.title === "Network"
  // );

  // const meta = data?.meta;
  return (
    <div className="bg-white">
      <HeroSection />
      <AboutUs />
      {/* Service page */}
      <div>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-primary uppercase tracking-widest font-normal mb-4 text-2xl">
            Latest Services
          </h4>
          <h2 className="font-semibold text-3xl">
            We Are Offering All Kinds of{" "}
            <span className="text-primary font-bold">IT</span> and{" "}
            <span className="text-primary font-bold">Computer</span>{" "}
          </h2>
          <h2 className="font-semibold text-3xl">Solutions Services</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-6">
          {categories?.map((category: any, index: number) => (
            <CategoryCard key={index} category={category} />
          ))}
          <div className="text-center mt-6">
            <PrimaryButton
              size="large"
              title="Our All Services"
              type="primary"
              href="/service"
            />
          </div>
        </div>
      </div>
      {/* it services */}
      {/* <div> */}
      {/* <ServicePage
          data={itServices}
          title="IT service"
          description="The kind of IT services we provide to your"
        /> */}
      {/* Software services */}
      {/* <ServicePage
          data={softwareServices}
          title="Software service"
          description="The kind of Software services we provide to your"
        /> */}
      {/* Computer services */}
      {/* <ServicePage
          data={computerHardwareServices}
          title="Computer service"
          description="The kind of Computer  services we provide to your"
        /> */}
      {/* Laptop services */}
      {/* <ServicePage
          data={laptopHardwareServices}
          title="Laptop  service"
          description="The kind of Laptop  services we provide to your"
        /> */}
      {/* Network services */}
      {/* <ServicePage
          data={networkServices}
          title="Network service"
          description="The kind of Network services we provide to your"
        /> */}
      {/* </div> */}
      <FAQPage />
      <FloatButton.BackTop style={{ color: "blue" }} />
    </div>
  );
};

export default HomePage;
