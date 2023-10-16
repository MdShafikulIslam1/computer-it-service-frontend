"use client";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormSelectField from "@/components/Form/FormSelectField";
import { bookingOptions } from "@/constant/global";
import {
  useGetSingleBookingQuery,
  useUpdateBookingMutation,
} from "@/redux/api/bookingApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const EditBookingPage = ({ params }: { params: any }) => {
  const { id } = params;
  const router = useRouter();
  const { data } = useGetSingleBookingQuery(id);
  const [updateBooking] = useUpdateBookingMutation();
  const handleDepartment = async (values: any) => {
    message.loading("updating ...");
    try {
      const res = await updateBooking({ id, data: values }).unwrap();
      if (res.id) {
        message.success("Status Updated Successfully");
        router.push("/admin/manage-booking");
      }
    } catch (error: any) {
      message.error(error?.message);
    }
  };
  const defaultValues = {
    status: data?.status || "",
  };
  return (
    <div>
      <Form submitHandler={handleDepartment} defaultValues={defaultValues}>
        <p
          style={{
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          Update Status For Booking
        </p>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={6}
            style={{
              marginBottom: "10px",
            }}
          >
            <div>
              <FormSelectField
                name="status"
                size="large"
                label="Status"
                options={bookingOptions}
                required={true}
              />
            </div>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit" style={{ marginTop: "10px" }}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditBookingPage;
