import { useMutation } from "@tanstack/react-query";
import axios, { type AxiosError } from "axios";
import type { AxiosResponse, MutationResult } from "@/types/shared";
// import type { SignUpSchemaType } from "../models/validations/sign-up";
// import type { AuthSuccessResponse, AuthErrorResponse } from "@/types/sign-up";
import { useNavigate } from "react-router-dom";
import { useDialog } from "../ui/use-dialog";

type ON_SUBMIT = MutationResult<SignUpSchemaType>;

type SignUpFeatures = {
  onSubmit: ON_SUBMIT;
};

export const useSignUpFeatures = (): SignUpFeatures => {
  const navigate = useNavigate();
  const { showDialog } = useDialog();

  const onSubmit: ON_SUBMIT = useMutation({
    mutationFn: async (values) => {
      return await axios.post<AxiosResponse<AuthSuccessResponse>>(
        "http://localhost:8080/auth/register",
        {
          email: values.email,
          password: values.password,
          name: values.name,
          surname: values.surname,
          role: "USER"
        }
      );
    },
    onError: (error) => {
      const { response } = error as AxiosError<AuthErrorResponse>;

      const status = response?.status; // Backenddan kelgan HTTP status
      const errorStatus = response?.data?.status; // Backenddan kelgan xabar

      if (status === 400 && errorStatus === "USER_ALREADY_EXISTS") {
        showDialog({
          title: "이미 존재하는 계정입니다.",
          description: "로그인 또는 비밀번호 재설정을 진행해 주세요.",
          onConfirm: async () => {},
          variant: "account-already-exists",
          confirmText: "확인"
        });
      }
    },
    onSuccess: (_, variables) => {
      navigate(`/verify-account?email=${variables?.email}`);
    }
  });

  return {
    onSubmit
  };
};
