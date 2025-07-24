import * as Yup from "yup";

export const homeContactSchema = Yup.object({
  organization_name: Yup.string(), // Bu maydon majburiy emas edi, shunday qoldiramiz. Agar majburiy bo'lsa .required() qo'shing.
  name: Yup.string().required("이름은 필수입니다."),
  phone: Yup.string().required("전화번호는 필수입니다."),
  email: Yup.string()
    .email("유효한 이메일을 입력하세요.")
    .required("이메일은 필수입니다."),
  enquire: Yup.string().required("문의 내용을 입력하세요."),
  agree1: Yup.boolean()
    .oneOf([true], "개인정보 수집 및 이용 동의는 필수입니다.") // Checkbox uchun validatsiya
    .required("개인정보 수집 및 이용 동의는 필수입니다."), // Formik buni submit oldidan tekshiradi
  agree2: Yup.boolean(),
});
export type HomeContactSchemaType = Yup.InferType<typeof homeContactSchema>;
