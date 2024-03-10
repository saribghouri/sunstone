import { createSlice } from "@reduxjs/toolkit";

import { credentialsdata } from "../features/credentials";

interface AppData {
  id: number;
  name: string;
}
const initialState = {
  data: [] as AppData[],
  status: "idle",
  error: null as string | null,
};

export const credentialsSlice = createSlice({
  name: "appList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      .addCase(credentialsdata.pending, (state) => {
        state.status = "loading";
      })
      .addCase(credentialsdata.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(credentialsdata.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An unknown error occurred";
      });
  },
});

// export default analyticSlice.reducer;
export default credentialsSlice.reducer;
