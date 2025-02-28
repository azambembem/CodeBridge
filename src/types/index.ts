import type { UseMutationResult } from "@tanstack/react-query";

export type MutationResult<T> = UseMutationResult<void, Error, T, void>;

export type AxiosResponse<T = unknown>= {
    success: boolean;
    data: T;
    message: string | null;
};