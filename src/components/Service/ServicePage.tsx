"use client";
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Button } from "antd";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";
interface IProps {
  data: any;
  title: string;
  description: string;
}
//TODO: pore type implement korbo
const ServicePage = ({ data, title, description }: IProps) => {
  return (
    <>
      <div>
        <hr/>
        <SectionTitle
          title={title}
          description={description}
        />
        <div className="flex gap-8 flex-wrap justify-center items-center ">
    
         {data?.map((item: any, index: number) => (
            <ServiceCard key={index} item={item} />
          ))}
    
        </div>
        <Link href="/service">
          <div className="text-center my-4">
            <Button style={{ fontWeight: "bold" }} type="primary">
              More Service +
            </Button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServicePage;
