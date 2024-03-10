import { createSlice } from "@reduxjs/toolkit";

import { deleteApplication } from "../features/deleteApp";

interface AppData {
  id: number;
  name: string;
}
const initialState = {
  data: [] as AppData[],
  status: "idle",
  error: null as string | null,
};

export const deleteSlice = createSlice({
  name: "appList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(deleteApplication.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteApplication.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(deleteApplication.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An unknown error occurred";
      });
  },
});

export default deleteSlice.reducer;
