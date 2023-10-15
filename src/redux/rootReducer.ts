import baseApi from "./api/baseApi";
import counterReducer from "../redux/feature/counter/counterSlice";

const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  counter: counterReducer,
};
export default reducer;
