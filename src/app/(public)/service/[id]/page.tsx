"use client";
import Loading from "@/components/LoadingComponent/LoadingComponent";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import { useGetSingleServiceQuery } from "@/redux/api/servicesApi";
//TODO: pore type set korte hbe

const ServiceDetailsPage = ({ params }: any) => {
  const { id } = params;
  const { data, isLoading } = useGetSingleServiceQuery(id);
  <Loading isLoading={isLoading} />;
  return (
    <div>
      <ServiceDetails item={data} />
    </div>
  );
};

export default ServiceDetailsPage;
