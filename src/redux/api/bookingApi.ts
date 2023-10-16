import { IMeta } from "@/types/globalType";
import baseApi from "./baseApi";
import { tagTypes } from "../tagTypes/tagTypes";

const BOOKING_URL = "/bookings";
const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBookings: build.query({
      query: (arg: Record<string, any>) => ({
        url: BOOKING_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          bookings: response,
          meta,
        };
      },
      providesTags: [tagTypes.BOOKING],
    }),
    getSingleBooking: build.query({
      query: (id: string) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.BOOKING],
    }),
    createBooking: build.mutation({
      query: (data: any) => ({
        url: `${BOOKING_URL}/create-booking`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.BOOKING],
    }),
    updateBooking: build.mutation({
      query: ({ id, data }) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.BOOKING],
    }),
    deleteBooking: build.mutation({
      query: (id: string) => ({
        url: `${BOOKING_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.BOOKING],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useGetSingleBookingQuery,
  useCreateBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;
