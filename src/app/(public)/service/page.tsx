"use client";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { useGetAllServicesQuery } from "@/redux/api/servicesApi";
import { useState } from "react";
import { Button, Empty, Segmented } from "antd";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import Loading from "@/components/LoadingComponent/LoadingComponent";
import Overlay from "@/components/Overlay/Overlay";
import FormSelectField from "@/components/Form/FormSelectField";
import Form from "@/components/Form/Form";

const AllServicePage = () => {
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const { data: categoryData } = useGetAllCategoriesQuery({
    limit: 10,
    page: 1,
  });

  const categoriesOptions = [
    { label: "All", value: null },
    ...(categoryData?.categories?.map((category: any) => ({
      label: category?.title,
      value: category?.id,
    })) || []),
  ];
  const query: Record<string, any> = {};
  if (!!categoryId) query["categoryId"] = categoryId;
  // Query to initially fetch all data
  const { data, isLoading } = useGetAllServicesQuery({ ...query });

  const services = data?.services;
  const handleFilter = (value: any) => {
    setCategoryId(value);
  };

  return (
    <>
      <Overlay heading="Services" currentPageTitle="services" />
      <div className="my-12">
        <Form submitHandler={handleFilter}>
          <div className="w-auto  md:mx-auto md:w-1/4 text-center">
            <FormSelectField
              name="categoryId"
              label="Filter by Category"
              options={categoriesOptions}
              handleChange={(el) => setCategoryId(el)}
            />
          </div>
          {/* <Button type="primary" htmlType="submit" style={{ marginTop: "10px" }}>
          Add Course Section
        </Button> */}
        </Form>
      </div>
      {<Loading isLoading={isLoading} />}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {services?.length > 0 ? (
          services.map((item: any, index: number) => (
            <ServiceCard key={index} item={item} />
          ))
        ) : (
          <Empty description="No data found for this category" />
        )}
      </div>
    </>
  );
};

export default AllServicePage;
