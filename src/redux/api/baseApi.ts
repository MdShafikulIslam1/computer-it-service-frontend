import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "../tagTypes/tagTypes";
import axiosBaseQuery from "@/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() as string }),
  endpoints: () => ({}),
  tagTypes: tagTypeList,
});
export default baseApi;
