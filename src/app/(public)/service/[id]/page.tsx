"use client";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import { useGetSingleServiceQuery } from "@/redux/api/servicesApi";
//TODO: pore type set korte hbe

const ServiceDetailsPage = ({ params }: any) => {
  const { id } = params;
  const { data } = useGetSingleServiceQuery(id);
  return (
    <div>
      <ServiceDetails item={data} />
    </div>
  );
};

export default ServiceDetailsPage;
