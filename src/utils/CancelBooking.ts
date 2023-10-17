import { useUpdateBookingMutation } from "@/redux/api/bookingApi";
import { message } from "antd";

const CancelBooking = async (id: string) => {
  try {
    const [updateBooking] = useUpdateBookingMutation();
    const res = await updateBooking({
      id,
      data: { status: "CANCEL" },
    }).unwrap();
    if (res.id) {
      message.success("Your booking has been cancelled");
    }
  } catch (error: any) {
    message.error(error?.message);
  }
};

export default CancelBooking;
