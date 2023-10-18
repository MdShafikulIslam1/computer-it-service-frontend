"use client";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ServicePage from "@/components/Service/ServicePage";
import { useGetAllServicesQuery } from "@/redux/api/servicesApi";
import {FloatButton} from 'antd'

const HomePage = () => {
  const { data } = useGetAllServicesQuery({ limit: 4, page: 1 });
  const services = data?.services;
  const meta = data?.meta;
  return (
    <div className="bg-gray-50">
      <HeroSection/>
      <SectionTitle/>
      <ServicePage data={services} />
      <FloatButton.BackTop />
    </div>
  );
};

export default HomePage;
