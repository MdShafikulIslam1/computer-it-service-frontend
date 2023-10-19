import { IMeta } from "@/types/globalType";
import baseApi from "./baseApi";
import { tagTypes } from "../tagTypes/tagTypes";

const FEEDBACK_URL = "/feedbacks";
const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFeedbacks: build.query({
      query: (arg: Record<string, any>) => ({
        url: FEEDBACK_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          feedbacks: response,
          meta,
        };
      },
      providesTags: [tagTypes.FEEDBACK],
    }),
    getSingleFeedback: build.query({
      query: (id: string) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.FEEDBACK],
    }),
    createFeedback: build.mutation({
      query: (data: any) => ({
        url: `${FEEDBACK_URL}/create-feedback`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.FEEDBACK],
    }),
    updateFeedback: build.mutation({
      query: ({ id, data }) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.FEEDBACK],
    }),
    deleteFeedback: build.mutation({
      query: (id: string) => ({
        url: `${FEEDBACK_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.FEEDBACK],
    }),
  }),
});

export const {
  useGetAllFeedbacksQuery,
  useGetSingleFeedbackQuery,
  useCreateFeedbackMutation,
  useUpdateFeedbackMutation,
  useDeleteFeedbackMutation,
} = feedbackApi;
