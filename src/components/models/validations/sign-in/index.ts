import * as Yup from "yup";

export const signInSchema = Yup.object({
  email: Yup.string()
    .email("이메일 형식이 올바르지 않습니다")
    .required("이메일을 입력해 주세요"),
  password: Yup.string()
    .required("비밀번호를 입력해 주세요")
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다"),
});

export type SignInSchemaType = Yup.InferType<typeof signInSchema>;
