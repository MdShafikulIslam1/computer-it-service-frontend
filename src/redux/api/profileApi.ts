import { IMeta } from "@/types/globalType";
import baseApi from "./baseApi";
import { tagTypes } from "../tagTypes/tagTypes";

const PROFILE_URL = "/Profiles";
const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProfiles: build.query({
      query: (arg: Record<string, any>) => ({
        url: PROFILE_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: IMeta) => {
        return {
          Profiles: response,
          meta,
        };
      },
      providesTags: [tagTypes.PROFILE],
    }),
    getSingleProfile: build.query({
      query: (id: string) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.PROFILE],
    }),
    createProfile: build.mutation({
      query: (data: any) => ({
        url: `${PROFILE_URL}/create-Profile`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.PROFILE],
    }),
    updateProfile: build.mutation({
      query: ({ id, data }) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tagTypes.PROFILE],
    }),
    deleteProfile: build.mutation({
      query: (id: string) => ({
        url: `${PROFILE_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProfilesQuery,
  useGetSingleProfileQuery,
  useCreateProfileMutation,
  useUpdateProfileMutation,
  useDeleteProfileMutation,
} = profileApi;
