import { RootState } from "../rootReducer";

export const selectApp = (state: RootState) => state.auth.data;
export const selectAppLoading = (state: RootState) => state.auth.status;
export const selectAppError = (state: RootState) => state.auth.error;
