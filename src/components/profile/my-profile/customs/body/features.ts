import { useAxios } from "@/hooks/useAxios";
import type { AxiosResponse, MutationResult } from "@/types"
import type { TUser } from "@/types/user"
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import { CredentialForm } from "@/types/profile";

type ON_SUBMIT = MutationResult<TUser>;
type ON_SUBMIT_CREDENTIALS = MutationResult<CredentialForm>;

type BodyFeatures = {
    onSubmit: ON_SUBMIT;
    onSubmitCredentials: ON_SUBMIT_CREDENTIALS;
}

export const useBodyFeatures = (): BodyFeatures => {
    const axios = useAxios();
    const signIn = useSignIn();
    const authHeader = useAuthHeader()

    const onSubmit: ON_SUBMIT = useMutation({
        mutationFn: async (values) => {
            try {
             const {data} = await axios<{user: TUser}>({
                    url: "/auth/profile",
                    method: "PUT",
                    data: values
                });

                console.log(data?.data?.user);

				signIn({
					userState: data?.data?.user,
					auth: {
						token: String(authHeader?.split(" ")[1]),
						type: "Bearer",
					},
				});

                toast("환영합니다!", {
                    description: "계정에 성공적으로 로그인하셨습니다!",
                  });

            } catch (error) {
                const { response } = error as AxiosError<AxiosResponse>;

                toast.error("오류가 발생했습니다", {
                    description: `${response?.data?.message}`,
                  });
            }
        }
    });

    const onSubmitCredentials: ON_SUBMIT_CREDENTIALS = useMutation({
        mutationFn: async (values) => {
            try {
                await axios<{user: TUser}>({
                    url: "/auth/password",
                    method: "PUT",
                    data: values
                });

                toast("환영합니다!", {
                    description: "계정에 성공적으로 로그인하셨습니다!",
                  });

            } catch (error) {
                const { response } = error as AxiosError<AxiosResponse>;

                toast.error("오류가 발생했습니다", {
                    description: `${response?.data?.message}`,
                  });
            }
        }
    });
    
    return { onSubmit, onSubmitCredentials };

}