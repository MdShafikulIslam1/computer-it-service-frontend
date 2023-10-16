import { IMeta } from "@/types/globalType";
import baseApi from "./baseApi";
import { tagTypes } from "../tagTypes/tagTypes";

const CART_URL = "/carts";
const cartApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCarts: build.query({
      query: (arg: Record<string, any>) => ({
        url: CART_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          carts: response,
          meta,
        };
      },
      providesTags: [tagTypes.CART],
    }),
    getSingleCart: build.query({
      query: (id: string) => ({
        url: `${CART_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.CART],
    }),
    createCart: build.mutation({
      query: (data: any) => ({
        url: `${CART_URL}/create-cart`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.CART],
    }),
    updateCart: build.mutation({
      query: ({ id, data }) => ({
        url: `${CART_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.CART],
    }),
    deleteCart: build.mutation({
      query: (id: string) => ({
        url: `${CART_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.CART],
    }),
  }),
});

export const {
  useGetAllCartsQuery,
  useGetSingleCartQuery,
  useCreateCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
} = cartApi;
