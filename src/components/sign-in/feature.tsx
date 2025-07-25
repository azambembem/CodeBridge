import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import type { MutationResult } from "@/types/shared";
import type { SignInSchemaType } from "../models/validations/sign-in";
import type { AuthSuccessResponse, AuthErrorResponse } from "@/types/sign-in";
import { useDialog } from "../ui/use-dialog";
import { useNavigate } from "react-router-dom";
import { useAxios } from "@/hooks/useAxios";

type ON_SUBMIT = MutationResult<SignInSchemaType>;
type RESEND_EMAIL = MutationResult<{ email: string }>;

export const useSignInFeatures = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const axios = useAxios();
  const { showDialog } = useDialog();

  const resendEmail: RESEND_EMAIL = useMutation({
    mutationFn: async ({ email }) => {
      return await axios({
        url: "auth/resend-reset-attempts-mail",
        data: {
          email
        }
      });
    },
    onSuccess: () => {
      toast("이메일 재전송 완료!", {
        description: "이메일을 다시 보냈습니다."
      });
    }
  });

  const onSubmit: ON_SUBMIT = useMutation({
    mutationFn: async (values) => {
      return await axios<AuthSuccessResponse>({
        url: "auth/login",
        method: "POST",
        data: values
      });
    },
    onError: (error, variables) => {
      const { response } = error as AxiosError<AuthErrorResponse>;

      const status = response?.status; // Backenddan kelgan HTTP status
      const errorStatus = response?.data?.status; // Backenddan kelgan xabar
      const errorAttempt = response?.data?.attempt_count; // Backenddan kelgan xabar

      // 1-holat: Email (ID) noto'g'ri - "존재하지 않는 계정" modali (3-rasm)
      if (status === 404) {
        showDialog({
          title: "로그인 실패",
          description: "잘못된 계정 정보입니다.",
          showCancel: true,
          cancelText: "확인",
          confirmText: "회원가입",
          variant: "non-existent-accounts",
          onConfirm: async () => {
            navigate("/sign-up");
          }
        });
      }

      // 2-holat: Password notog'ri (attempt)
      if (status === 401 && errorStatus === "INVALID_PASSWORD") {
        showDialog({
          // type: "password-error",
          title: "비밀번호 오류",
          description: (
            <>
              잘못된 비밀번호입니다.
              <br />
              로그인 시도 10회 실패 시 접속이 제한됩니다.
            </>
          ),
          attemptCount: errorAttempt,
          showCancel: false,
          cancelText: "확인",
          variant: "password-error",
          onConfirm: async () => {}
        });
      }

      // 3-holat: Password notog'ri (10 attempt)
      if (status === 401 && errorStatus === "TOO_MANY_ATTEMPTS") {
        showDialog({
          // type: "account-blocked",
          title: "계정 접속 제한",
          description: (
            <>
              로그인 시도가 10회 실패하여 접속이 제한되었습니다.
              <br />
              이메일 인증을 통해 접속 제한을 해제하시기 바랍니다.
            </>
          ),
          email: variables?.email,
          showCancel: true,
          confirmText: "확인",
          cancelText: "이메일 재전송",
          variant: "account-blocked",
          onConfirm: async () => {},
          onCancel: async () => {
            resendEmail.mutate({
              email: variables.email
            });
          }
        });
      }
    },
    onSuccess: (response) => {
      const { data } = response;

      signIn({
        userState: {
          token: data?.access_token
        },
        auth: {
          token: data?.access_token,
          type: "Bearer"
        }
      });

      toast("환영합니다!", {
        description: "계정에 성공적으로 로그인하셨습니다!"
      });

      window.location.replace("/");
    }
  });

  return {
    onSubmit
  };
};
