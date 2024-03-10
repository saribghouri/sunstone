import { createAsyncThunk } from "@reduxjs/toolkit";

import { createApp } from "../../../shared/constants/constant";
export const createApplication = createAsyncThunk<
  any[],
  { app_name: string; app_description: string }
>("recent/fetchData", async ({ app_name, app_description }) => {
  const response = await fetch(createApp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ app_name, app_description }),
  });
  const appresponse = await response.json();
  console.log("🚀 ~ allContent:", appresponse);

  if (!Array.isArray(appresponse)) {
    return [appresponse];
  }

  return appresponse;
});
