import { IMeta } from "@/types/globalType";
import baseApi from "./baseApi";
import { tagTypes } from "../tagTypes/tagTypes";

const PAYMENT_URL = "/payments";
const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    paymentInitialize: build.mutation({
      query: (data: any) => ({
        url: `${PAYMENT_URL}/init`,
        method: "POST",
        data,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          url: response,
          meta,
        };
      },
      invalidatesTags: [tagTypes.PAYMENT],
    }),
  }),
});

export const { usePaymentInitializeMutation } = paymentApi;
