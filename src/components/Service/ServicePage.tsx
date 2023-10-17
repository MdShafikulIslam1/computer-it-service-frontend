"use client"
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Button } from "antd";
import Link from "next/link";
//TODO: pore type implement korbo
const ServicePage = ({ data }: any) => {
  
  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((item: any, index: number) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
      <Link href="/service" >
       <div className="text-center my-4">
       <Button type="primary">More Service +</Button>
       </div>
      </Link>
    </>
  );
};

export default ServicePage;
