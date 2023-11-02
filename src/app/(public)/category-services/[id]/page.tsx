"use client";
import Loading from "@/components/LoadingComponent/LoadingComponent";
import Overlay from "@/components/Overlay/Overlay";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { useGetAllServicesQuery } from "@/redux/api/servicesApi";
import { DoubleRightOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const CategoryBasedServices = ({ params }: any) => {
  const { id } = params;
  const { data, isLoading } = useGetAllServicesQuery({ categoryId: id });
  <Loading isLoading={isLoading} />;
  const services = data?.services;
  return (
    <div>
     <Overlay heading="Category Based Services" currentPageTitle="category based products"/>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {services?.map((item: any, index: number) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryBasedServices;
