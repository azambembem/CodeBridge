import type { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { JSX } from "react";

export type MutationResult<T> = UseMutationResult<unknown, Error, T, void>;

export type AxiosResponse<T = unknown> = {
  success: boolean;
  data: T;
  message: string | null;
};

export type QueryResult<T> = UseQueryResult<T>;

export type TRoute = {
  id: string;
  path: string;
  element: JSX.Element;
  customLayout?: boolean;
  children?: {
    path?: string;
    index?: boolean;
    element: JSX.Element;
    customLayout?: boolean;
  }[];
};
