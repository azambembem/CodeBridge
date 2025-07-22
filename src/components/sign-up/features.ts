// import type { AxiosResponse, MutationResult } from "@/types";
// import type { AuthSuccessResponse, SignUpForm } from "@/types/sign-up";
// import { useMutation } from "@tanstack/react-query";
// import axios, { type AxiosError } from "axios"; // api bn boglash
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import useSignIn from "react-auth-kit/hooks/useSignIn";

// type ON_SUBMIT = MutationResult<SignUpForm>;

// type SignUpFeatures = {
//   onSubmit: ON_SUBMIT;
// };

// export const useSignUpFeatures = (): SignUpFeatures => {
//   const signIn = useSignIn();
//   const navigate = useNavigate();

//   const onSubmit: ON_SUBMIT = useMutation({
//     mutationFn: async (values) => {
//       // input forkikdan oliyotgan malumotlar

//       try {
//         const { data } = await axios.post<AxiosResponse<AuthSuccessResponse>>(
//           `${import.meta.env.VITE_MAIN_APP}/auth/sign-up`,
//           values
//         );

//         signIn({
//           userState: data?.data?.user,
//           auth: {
//             token: data?.data?.token,
//             type: "Bearer"
//           }
//         });

//         toast("축가하합니다!", {
//           description: "성공적으로 등록되었습니다"
//         });

//         navigate("/");
//       } catch (error) {
//         const { response } = error as AxiosError<AxiosResponse>;

//         toast.error("오류가 발생했습니다", {
//           description: `${response?.data?.message}`
//         });
//       }
//     }
//   });

//   return { onSubmit };
// };

import type { AxiosResponse, MutationResult } from "@/types";
import type { AuthSuccessResponse, SignUpForm } from "@/types/sign-up";
import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useSignIn from "react-auth-kit/hooks/useSignIn";

type ON_SUBMIT = MutationResult<SignUpForm>;

type SignUpFeatures = {
  onSubmit: ON_SUBMIT;
  onGoogleAuthSuccess: (token: string, userState?: any) => void;
};

export const useSignUpFeatures = (): SignUpFeatures => {
  const signIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit: ON_SUBMIT = useMutation({
    mutationFn: async (values) => {
      try {
        const { data } = await axios.post<AxiosResponse<AuthSuccessResponse>>(
          `${import.meta.env.VITE_MAIN_APP}/auth/sign-up`,
          values
        );

        signIn({
          userState: data?.data?.user,
          auth: {
            token: data?.data?.token,
            type: "Bearer"
          }
        });

        toast("축가하합니다!", {
          description: "성공적으로 등록되었습니다"
        });

        navigate("/");
      } catch (error) {
        const { response } = error as AxiosError<AxiosResponse>;

        toast.error("오류가 발생했습니다", {
          description: `${response?.data?.message}`
        });
      }
    }
  });

  // Google OAuth token va userState bilan
  const onGoogleAuthSuccess = (token: string, userState: any = {}) => {
    try {
      signIn({
        auth: {
          token,
          type: "Bearer"
        },
        userState
      });

      toast("로그인 성공!", {
        description: "Google orqali tizimga muvaffaqiyatli kirdingiz."
      });

      navigate("/");
    } catch (error) {
      toast.error("오류가 발생했습니다", {
        description: "Tokenni qabul qilishda xatolik yuz berdi"
      });

      navigate("/sign-in");
    }
  };

  return { onSubmit, onGoogleAuthSuccess };
};
