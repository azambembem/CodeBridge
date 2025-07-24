import { useState } from "react";
import { useFormik } from "formik";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useContactFeatures } from "./features";
import { ContactUsForm } from "@/types/home";
import { homeContactSchema } from "@/components/models/validations/home-contact";
import RequiredAgreeModal from "./modal/required-agree";
import InquirySuccessModal from "./modal/inquiry-success";
import PersonalInfoModal from "./modal/personal-info";

const ContactSession = () => {
  const [showRequiredAgreeModal, setShowRequiredAgreeModal] = useState(false);
  const [showInquirySuccessModal, setShowInquirySuccessModal] = useState(false);
  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);
  const {
    onSubmit: { mutateAsync: onSubmit }
  } = useContactFeatures();

  const formik = useFormik<ContactUsForm>({
    initialValues: {
      organization_name: "",
      name: "",
      phone: "",
      email: "",
      enquire: "",
      agree1: false,
      agree2: false
    },
    validationSchema: homeContactSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log("Submitted:", values);
      await onSubmit(values);
      setShowInquirySuccessModal(true);
      formik.resetForm();
      setSubmitting(false);
    }
  });

  const handleSubmitClick = () => {
    formik.validateForm().then((errors) => {
      const fieldErrorsExist = Object.keys(errors).some(
        (key) => key !== "agree1"
      );

      if (fieldErrorsExist) {
        // Agar agree1 dan boshqa maydonlarda xato bo'lsa, Formik o'z xabarlarini ko'rsatadi
        formik.handleSubmit();
      } else if (errors.agree1 && !formik.values.agree1) {
        // Agar agree1 belgilanmagan bo'lsa, RequiredAgreeModal ni ochamiz
        setShowRequiredAgreeModal(true);
      } else {
        // Boshqa barcha holatlarda, formani yuboramiz
        formik.handleSubmit();
      }
    });
  };

  return (
    <div
      id="contact-heading"
      className="w-full min-h-screen  bg-gradient-to-l from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E] py-12 px-4 flex justify-center items-start md:items-center"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitClick();
        }}
        className="w-full max-w-[600px] space-y-6"
      >
        <h1 className="text-[#EEEEEE] text-center text-[18px] md:text-[20] lg:text-[28px] font-semibold ">
          무엇이든 문의하세요
        </h1>
        <p className="text-[14px] md:text-[16px] text-[#A5A5A5] text-center mb-8">
          {/* 모바일: 3줄 */}
          <span className="block md:hidden">강의 내용부터 신청 방법까지,</span>
          <span className="block md:hidden">어떤 질문이든 환영합니다!</span>
          {/* 태블릿 ~ PC: 2줄 */}
          <span className="hidden md:block">
            <span className="block whitespace-nowrap">
              강의 내용부터 신청 방법까지, 어떤 질문이든 환영합니다!
            </span>
          </span>
        </p>

        {/* Org Name */}
        <div className="space-y-1">
          <Input
            className={`border rounded-md bg-transparent text-[#EEEEEE] h-14 text-lg px-4 placeholder:text-[#747474] ${
              formik.touched.organization_name &&
              formik.errors.organization_name
                ? "border-[#FF7B7B]"
                : "border-[#4F4F4F]"
            }`}
            id="name"
            placeholder="학교 또는 단체명 (선택)"
            {...formik.getFieldProps("organization_name")}
          />
          {formik.touched.organization_name &&
          formik.errors.organization_name ? (
            <div className="text-[#FF7B7B] text-[14px] pt-1">
              {formik.errors.organization_name}
            </div>
          ) : null}
        </div>

        {/* Inquiry Type */}
        <div className="space-y-1">
          <Input
            className={`border rounded-md bg-transparent text-[#EEEEEE] h-14 text-lg px-4 placeholder:text-[#747474] ${
              formik.touched.name && formik.errors.name
                ? "border-[#FF7B7B]"
                : "border-[#4F4F4F]"
            }`}
            id="inquiryType"
            placeholder="이름"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-[#FF7B7B] text-[14px] pt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <Input
            className={`border rounded-md bg-transparent text-[#EEEEEE] h-14 text-lg px-4 placeholder:text-[#747474] ${
              formik.touched.phone && formik.errors.phone
                ? "border-[#FF7B7B]"
                : "border-[#4F4F4F]"
            }`}
            id="phone"
            placeholder="전화번호"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-[#FF7B7B] text-[14px] pt-1">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Input
            className={`border rounded-md bg-transparent text-[#EEEEEE] h-14 text-lg px-4 placeholder:text-[#747474] ${
              formik.touched.email && formik.errors.email
                ? "border-[#FF7B7B]"
                : "border-[#4F4F4F]"
            }`}
            id="email"
            placeholder="이메일"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-[#FF7B7B] text-[14px] pt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        {/* Message */}
        <div className="space-y-1">
          <Textarea
            className={`border rounded-md bg-transparent text-[#EEEEEE] text-lg px-4 py-4 placeholder:text-[#747474] min-h-[120px] ${
              formik.touched.enquire && formik.errors.enquire
                ? "border-[#FF7B7B]"
                : "border-[#4F4F4F]"
            }`}
            id="message"
            placeholder="관심 강의나 문의 내용을 작성해주세요"
            rows={5}
            {...formik.getFieldProps("enquire")}
          />
          {formik.touched.enquire && formik.errors.enquire ? (
            <div className="text-[#FF7B7B] text-[14px] pt-1">
              {formik.errors.enquire}
            </div>
          ) : null}
        </div>

        {/* 약관 전문 버튼 - 모바일 */}
        <div className="flex justify-start mb-4 md:hidden">
          <Button
            type="button"
            className="text-[12px] font-light text-[#EEEEEE] hover:bg-[#646060] px-4 h-[30px] w-[77px] bg-[#3B3B3B] "
            onClick={() => setShowPersonalInfoModal(true)}
          >
            약관 전문
          </Button>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4 text-base text-[#A5A5A5]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Checkbox
                className={`border bg-transparent w-5 h-5 ${
                  formik.touched.agree1 &&
                  formik.errors.agree1 &&
                  !formik.values.agree1 &&
                  !showRequiredAgreeModal
                    ? "border-[#FF7B7B]"
                    : "border-[#EEEEEE]"
                }`}
                id="agree1"
                checked={formik.values.agree1}
                onCheckedChange={(val) =>
                  formik.setFieldValue("agree1", val as boolean)
                }
              />
              <Label htmlFor="agree1" className="text-[14px] font-light">
                [필수] 개인정보 수집 및 이용 동의
              </Label>
            </div>
            <Button
              type="button"
              className="hidden md:block text-[12px] text-[#EEEEEE] font-light hover:bg-[#4F4F4F] px-4 h-[46px] w-[105px] bg-[#3B3B3B]"
              onClick={() => setShowPersonalInfoModal(true)}
            >
              약관 전문
            </Button>
          </div>
          {formik.touched.agree1 &&
          formik.errors.agree1 &&
          !formik.values.agree1 &&
          !showRequiredAgreeModal ? (
            <div className="text-[#FF7B7B] text-[14px] pt-1">
              {formik.errors.agree1}
            </div>
          ) : null}

          <div className="flex items-center space-x-3">
            <Checkbox
              className="border border-[#EEEEEE] bg-transparent w-5 h-5"
              id="agree2"
              checked={formik.values.agree2}
              onCheckedChange={(val) =>
                formik.setFieldValue("agree2", val as boolean)
              }
            />
            <Label htmlFor="agree2" className="text-[14px] font-light">
              [선택] 마케팅 및 광고 수신 동의
            </Label>
          </div>
        </div>

        <Button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full h-14 bg-[#D5001C] hover:bg-[#DB3446] text-[#EEEEEE] font-semibold text-[16px] mt-8"
        >
          문의 접수하기
        </Button>
      </form>

      {/* Required Agree Modal */}
      <RequiredAgreeModal
        isOpen={showRequiredAgreeModal}
        onClose={() => setShowRequiredAgreeModal(false)}
      />

      {/* Inquiry Success Modal */}
      <InquirySuccessModal
        isOpen={showInquirySuccessModal}
        onClose={() => setShowInquirySuccessModal(false)}
      />
      <PersonalInfoModal
        isOpen={showPersonalInfoModal}
        onClose={() => setShowPersonalInfoModal(false)}
      />
    </div>
  );
};

export default ContactSession;
