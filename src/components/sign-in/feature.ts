import type { AxiosResponse, MutationResult } from "@/types";
import type { AuthSuccessResponse, SignInForm } from "@/types/sign-in";
import { useMutation } from "@tanstack/react-query";
import axios, {type AxiosError } from "axios";
import { toast } from "sonner";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";


type ON_SUBMIT = MutationResult<SignInForm>;
type SignInFeatures = {onSubmit: ON_SUBMIT}


export const useSignInFeatures = (): SignInFeatures => {
    const signIn = useSignIn();
    
    const navigate = useNavigate();
  
    const onSubmit: ON_SUBMIT = useMutation({
      mutationFn: async (values) => {
        try {
          const { data } = await axios.post <AxiosResponse<AuthSuccessResponse>>(
            `${import.meta.env.VITE_MAIN_APP}/auth/sign-in`,
             values
            );
  
          signIn({
            userState: data?.data?.user,
            auth: {
              token: data?.data?.token,
              type: "Bearer",
            },
          });
  
          toast("환영합니다!", {
            description: "계정에 성공적으로 로그인하셨습니다!",
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