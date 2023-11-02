"use client";
import { BsFilter } from "react-icons/bs";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { useGetAllServicesQuery } from "@/redux/api/servicesApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Form from "@/components/Form/Form";
import { Button, Col, Row, Space, Spin } from "antd";
import FormSelectField from "@/components/Form/FormSelectField";
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import Loading from "@/components/LoadingComponent/LoadingComponent";
import Overlay from "@/components/Overlay/Overlay";

const AllServicePage = () => {
  const query: Record<string, unknown> = {};
  const [id, setId] = useState<string>("");
  const [filtering, setFiltering] = useState({});
  const [isFilterShow, setIsFilterShow] = useState(false);
  const { data, isLoading } = useGetAllServicesQuery({...query  });
  <Loading isLoading= {isLoading}/>
  const services = data?.services;
  console.log(services);
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
  const handleFilter = () => {
    if (isFilterShow) {
      setIsFilterShow(false);
      setFiltering({});
    } else {
      setIsFilterShow(true);
    }
  };
  const onSubmit: SubmitHandler<any> = async (values: any) => {
    query["categoryId"] = values?.category;
    setId(values?.category);
  };

  <Loading isLoading={isLoading} />;
  return (
    <>
    <Overlay heading="Services" currentPageTitle="services"/>
    <div className="grid grid-cols-12 gap-6 mt-2 ">
      <div
        onClick={handleFilter}
        className="flex items-center justify-center gap-2 py-2 ml-2 border rounded-lg cursor-pointer px-14"
      >
        <p className="">
          <BsFilter className="w-8 h-8" />
        </p>
        <span className="text-xl font-medium text-zinc-500">Filter</span>
      </div>
      {/* {isFilterShow && (
        <div className="col-span-12 pl-4 border">
          <div className="flex items-start  w-full h-full justify-start">
            <Form submitHandler={onSubmit}>
              <div className="mb-2 -mt-4">
                <FormSelectField
                  name="category"
                  label="Category"
                  placeHolder="Select Category"
                  required={true}
                  options={categoriesOptions}
                />
              </div>
              <Button
                style={{ fontWeight: "bold" }}
                htmlType="submit"
                type="primary"
              >
                Filter
              </Button>
            </Form>
          </div>
        </div>
      )} */}
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
