import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .required("이름을 입력해 주세요")
    .min(2, "이름은 최소 2글자 이상이어야 합니다"),
  surname: Yup.string()
    .required("성명을 입력해 주세요")
    .min(2, "성명은 최소 2글자 이상이어야 합니다"),
  email: Yup.string()
    .email("올바른 이메일 주소를 입력해 주세요")
    .required("이메일을 입력해 주세요"),
  password: Yup.string()
    .required("비밀번호를 입력해 주세요")
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])/,
      "비밀번호는 영문과 숫자를 포함해야 합니다"
    ),
  confirmPassword: Yup.string()
    .required("비밀번호 확인을 입력해 주세요")
    .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다"),
});

export type SignUpSchemaType = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  terms: boolean;
  privacy: boolean;
  pushMarketing: boolean;
};
