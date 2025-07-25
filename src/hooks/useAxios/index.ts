import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

export const useAxios = () => {
	const authHeader = useAuthHeader();

	return async <T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
		return await axios<T>({
			...config,
			url: `${import.meta.env.VITE_MAIN_APP}/${config.url}`,
			headers: {
				Authorization: authHeader,
				...config.headers,
			},
		});
	};
};
