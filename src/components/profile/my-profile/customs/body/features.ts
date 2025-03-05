import { useAxios } from "@/hooks/useAxios";
import type { AxiosResponse, MutationResult } from "@/types"
import type { TUser } from "@/types/user"
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

type ON_SUBMIT = MutationResult<TUser>;

type BodyFeatures = {
    onSubmit: ON_SUBMIT;
}

export const useBodyFeatures = (): BodyFeatures => {
    const axios = useAxios();

    const onSubmit: ON_SUBMIT = useMutation({
        mutationFn: async (values) => {
            try {
                await axios<TUser>({
                    url: "/auth/profile",
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
    
    return { onSubmit };

}