import { createSlice } from "@reduxjs/toolkit";

import { anaylatic } from "../features/analytic";

interface AppData {
  id: number;
  name: string;
}
const initialState = {
  data: [] as AppData[],
  status: "idle",
  error: null as string | null,
};

export const anaylaticSlice = createSlice({
  name: "appList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(anaylatic.pending, (state) => {
        state.status = "loading";
      })
      .addCase(anaylatic.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(anaylatic.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An unknown error occurred";
      });
  },
});

// export default analyticSlice.reducer;
export default anaylaticSlice.reducer;
