import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices';
import { authApi, organizationApi } from './api';

export const Store = configureStore({
  reducer: {
    auth: authSlice.reducer,

    [authApi.reducerPath]: authApi.reducer,
    [organizationApi.reducerPath]: organizationApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat( authApi.middleware, organizationApi.middleware )
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;