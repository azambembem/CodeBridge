import type{ AxiosResponse, MutationResult } from "@/types";
import type{ AuthSuccsessResponse, SignUpForm } from "@/types/sign-up";
import { useMutation } from "@tanstack/react-query";
import axios, {type AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useSignIn from "react-auth-kit/hooks/useSignIn";

type ON_SUBMIT = MutationResult<SignUpForm>;

type SignUpFeatures = {
  onSubmit: ON_SUBMIT;
};

export const useSignUpFeatures = (): SignUpFeatures => {
  const signIn = useSignIn();
  console.log();
  
  const navigate = useNavigate();

  const onSubmit: ON_SUBMIT = useMutation({
    mutationFn: async (values) => {
      try {
        const { data } = await axios.post<
          AxiosResponse<AuthSuccsessResponse>
        >(`${import.meta.env.VITE_MAIN_APP}/auth/sign-up`, values);

        signIn({
          userState: data?.data?.user,
          auth: {
            token: data?.data?.token,
            type: "Bearer",
          },
        });

        toast("축가하합니다!", {
          description: "성공적으로 등록되었습니다",
        });

        navigate("/");
      } catch (error) {
        const { response } = error as AxiosError<AxiosResponse>;

        toast.error("오류가 발생했습니다", {
          description: `${response?.data?.message}`,
          
        });
      }
    },
  });

  return { onSubmit };
};
