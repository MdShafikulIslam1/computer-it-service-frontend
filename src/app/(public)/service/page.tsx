"use client";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { useGetAllServicesQuery } from "@/redux/api/servicesApi";
import { useState } from "react";
import { Button, Segmented } from "antd";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import Loading from "@/components/LoadingComponent/LoadingComponent";
import Overlay from "@/components/Overlay/Overlay";

const AllServicePage = () => {
  const [categoryId, setCategoryId] = useState({});
  const { data: categoryData } = useGetAllCategoriesQuery({
    limit: 10,
    page: 1,
  });

  const categoriesOptions = categoryData?.categories?.map((category: any) => {
    return {
      label: category?.title,
      value: category?.id,
    };
  });
  // Query to initially fetch all data
  const { data, isLoading } = useGetAllServicesQuery({ categoryId });
  <Loading isLoading={isLoading} />;
  const services = data?.services;
  const handleFilter = (value: any) => {
    setCategoryId(value);
  };
  const handleGetAllData = () => {
    setCategoryId({})
  }

  return (
    <>
      <Overlay heading="Services" currentPageTitle="services" />
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="flex items-center">
          <div className="bg-primary text-white rounded p-2 ">
            <Button onClick={handleGetAllData} type="primary">All</Button>
          </div>
          <Segmented
            className="bg-primary text-white  p-2 w-auto"
            options={categoriesOptions}
            // value={value}
            onChange={(value) => handleFilter(value)}
          />
        </div>
        <div className="col-span-12 lg:col-span-12 my-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {services?.map((item: any, index: number) => (
              <ServiceCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServicePage;
