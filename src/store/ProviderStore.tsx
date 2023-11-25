"use client";


import { Store } from "./store";
import { Provider } from "react-redux";

export function ProviderStore({ children }: { children: React.ReactNode }) {
  return <Provider store={Store}>{children}</Provider>;
}