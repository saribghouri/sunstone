import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./features/auth-slice";
import anaylaticSlice from "./features/anylyticSlice";
import credentialsSlice from "./features/credentialSlice";
import applicationSlice from "./features/applicationSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  analytics: anaylaticSlice,
  credentials: credentialsSlice,
  application: applicationSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
