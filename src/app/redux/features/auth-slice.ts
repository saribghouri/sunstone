import { createSlice } from "@reduxjs/toolkit";
import { fetchAppList } from "../features/appApi";

interface AppData {
  id: number;
  name: string;
}
const initialState = {
  data: [] as AppData[],
  status: "idle",
  error: null as string | null,
};

export const appListSlice = createSlice({
  name: "appList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAppList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAppList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAppList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An unknown error occurred";
      });
  },
});
// export const analyticSlice = createSlice({
//   name: "analytic",
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder

//   },
// });

// export default analyticSlice.reducer;
export default appListSlice.reducer;
