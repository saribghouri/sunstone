import { createAsyncThunk } from "@reduxjs/toolkit";

import { credential } from "../../../shared/constants/constant";

export const credentialsdata = createAsyncThunk<any[]>(
  "recent/fetchData",
  async () => {
    const response = await fetch(`${credential}`);
    const credentialContent = await response.json();
    console.log("🚀 ~ allContent:", credentialContent);
    if (!Array.isArray(credentialContent)) {
      return [credentialContent];
    }

    return credentialContent;
  }
);
