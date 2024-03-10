import { createAsyncThunk } from "@reduxjs/toolkit";

import { analytics } from "../../../shared/constants/constant";

export const anaylatic = createAsyncThunk<any[]>(
  "recent/fetchData",
  async () => {
    const response = await fetch(`${analytics}`);
    const anaylaticContent = await response.json();
    console.log("🚀 ~ allContent:", anaylaticContent);
    return Object.entries(anaylaticContent).map(([key, value]) => ({
      appname: key,
      id: value,
    }));
    // if (!Array.isArray(allContent)) {
    //   return [allContent];
    // }

    // return allContent;
  }
);
