import { createAsyncThunk } from "@reduxjs/toolkit";

import { deleteApp } from "../../../shared/constants/constant";

// export const deleteApplication = createAsyncThunk<any[]>(
//   "recent/fetchData",
//   async () => {
//     const response = await fetch(`${deleteApp}`);
//     const deleteContent = await response.json();
//     console.log("🚀 ~ allContent:", deleteContent);
//     if (!Array.isArray(deleteContent)) {
//       return [deleteContent];
//     }

//     return deleteContent;
//   }
// );

export const deleteApplication = createAsyncThunk(
  "application/delete",
  async ({ appId, userId }: any) => {
    const response = await fetch(
      `${deleteApp}${encodeURIComponent(appId)}&UserID=${encodeURIComponent(
        userId
      )}`
    );
    if (!response.ok) {
      // Handle non-200 HTTP responses
      throw new Error("Failed to delete the application");
    }
    const deleteContent = await response.json();
    console.log("🚀 ~ Delete Response:", deleteContent);
    return deleteContent; // Assuming deleteContent contains the response from the server
  }
);
