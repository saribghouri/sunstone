import { createSlice } from "@reduxjs/toolkit";

import { createApplication } from "../features/createApp";

interface AppData {
  id: number;
  name: string;
}
const initialState = {
  data: [] as AppData[],
  status: "idle",
  error: null as string | null,
};

export const applicationSlice = createSlice({
  name: "appList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(createApplication.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createApplication.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(createApplication.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An unknown error occurred";
      });
  },
});

export default applicationSlice.reducer;
