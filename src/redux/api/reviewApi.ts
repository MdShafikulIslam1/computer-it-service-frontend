import { IMeta } from "@/types/globalType";
import baseApi from "./baseApi";
import { tagTypes } from "../tagTypes/tagTypes";

const REVIEW_URL = "/reviews";
const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllReviews: build.query({
      query: (arg: Record<string, any>) => ({
        url: REVIEW_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          reviews: response,
          meta,
        };
      },
      providesTags: [tagTypes.REVIEW],
    }),
    getSingleReview: build.query({
      query: (id: string) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.REVIEW],
    }),
    createReview: build.mutation({
      query: (data: any) => ({
        url: `${REVIEW_URL}/create-Review`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.REVIEW],
    }),
    updateReview: build.mutation({
      query: ({ id, data }) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.REVIEW],
    }),
    deleteReview: build.mutation({
      query: (id: string) => ({
        url: `${REVIEW_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useGetSingleReviewQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
