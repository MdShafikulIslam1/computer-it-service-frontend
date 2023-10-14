"use client";
import ServicePage from "@/components/Service/ServicePage";
import { useGetAllServicesQuery } from "@/redux/api/servicesApi";

const HomePage = () => {
  const { data } = useGetAllServicesQuery({ limit: 10, page: 1 });
  const services = data?.services;
  const meta = data?.meta;
  return (
    <div>
      <ServicePage data={services} />
    </div>
  );
};

export default HomePage;
