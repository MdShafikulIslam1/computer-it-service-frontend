import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
//TODO: pore type implement korbo
const ServicePage = ({ data }: any) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {data?.map((item: any, index: number) => (
        <ServiceCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ServicePage;
