import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../../shared/constants/constant";
import { analytics } from "../../../shared/constants/constant";

export const fetchAppList = createAsyncThunk<any[]>(
  "recent/fetchData",
  async () => {
    const response = await fetch(`${baseUrl}`);
    const allContent = await response.json();
    console.log("🚀 ~ allContent:", allContent);
    return Object.entries(allContent).map(([key, value]) => ({
      name: key,
      id: value,
    }));
    // if (!Array.isArray(allContent)) {
    //   return [allContent];
    // }

    // return allContent;
  }
);

// const asd = {
//   name: "First Application",
//   id: "fftt456765gjkkjhi83093985",
//   // clientIds: [{ id: "some id" }, { id: "some id" }, { id: "some id" }],
//   // clientIds2: ["some id", "some id", "some id"],
//   // clientIds3: {
//   //   "First Application": "fftt456765gjkkjhi83093985",
//   //   "Second Application": "fftt456765gjkkjhi83093985",
//   //   "Third Application": "fftt456765gjkkjhi83093985",
//   // },
// };
