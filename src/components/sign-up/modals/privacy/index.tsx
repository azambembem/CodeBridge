import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSignUpModal } from "@/redux/stores/sign-up";

const PrivacyTermsModal = () => {
  const dispatch = useReduxDispatch();
  const { isPrivacyTermsOpen } = useReduxSelector(
    ({ signUpModal }) => signUpModal
  );

  return (
    <Dialog
      open={isPrivacyTermsOpen}
      onOpenChange={() => {
        dispatch(setSignUpModal({ isPrivacyTermsOpen: false }));
      }}
    >
      <DialogContent className="bg-[#2B2B2B] border-[#4F4F4F] text-[#eee] max-w-5xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between border-b border-[#2B2B2B] pb-2 py-2">
          <DialogTitle className="text-[16px] md:text-[18px] font-semibold">
            개인정보 처리방침
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto bg-[#262626]">
          <div className="space-y-4 p-4">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-[12px] leading-relaxed md:text-[14px] lg:text-[14px] text-[#a5a5a5] font-light">
                  CodeBridge 온라인 IT 교육 센터(이하 “교육 센터”)는 정보주체의
                  자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이
                  정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게
                  관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라
                  정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고,
                  이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과
                  같이 개인정보 처리방침을 수립·공개합니다.
                </p>
              </div>
              <div className="py-6 sm:py-8">
                <h2 className="text-[13px] md:text-[14px] lg:text-[14px] font-light mb-3 sm:mb-4 text-[#a5a5a5]">
                  개인정보의 처리목적
                </h2>
                <p className="text-[12px] leading-relaxed md:text-[14px] lg:text-[14px] text-[#a5a5a5] font-light">
                  교육 센터는 다음의 목적을 위하여 개인정보를 처리합니다.
                  처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
                  않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」
                  제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
                  예정입니다.
                </p>
                <div className="py-6 sm:py-8 ml-3">
                  <ol className="space-y-3 sm:space-y-1">
                    <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5]">
                      <span className="w-1 h-1 bg-[#a5a5a5] rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-[12px] leading-relaxed md:text-[14px] lg:text-[14px] text-[#a5a5a5] font-light">
                        회원 가입 및 관리: 회원 가입 의사 확인, 회원제 서비스
                        제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스
                        부정 이용 방지, 만 14세 미만 아동의 개인정보 처리 시
                        법정대리인의 동의 여부 확인, 각종 고지·통지, 고충처리를
                        목적으로 개인정보를 처리합니다.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5]">
                      <span className="w-1 h-1 bg-[#a5a5a5] rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-[12px] leading-relaxed md:text-[14px] lg:text-[14px] text-[#a5a5a5] font-light">
                        온라인 강의 및 콘텐츠 제공 관련 문의 처리: 문의하기
                        기능을 통한 회원 문의에 대한 답변 제공을 목적으로
                        개인정보를 처리합니다.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5]">
                      <span className="w-1 h-1 bg-[#a5a5a5] rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-[12px] leading-relaxed md:text-[14px] lg:text-[14px] text-[#a5a5a5] font-light">
                        교육 서비스 제공: 강의, 학습 콘텐츠 제공, 계약서·청구서
                        발송, 맞춤 서비스 제공, 본인인증, 연령인증, 수강료
                        결제·정산을 목적으로 개인정보를 처리합니다.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5]">
                      <span className="w-1 h-1 bg-[#a5a5a5] rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-[12px] leading-relaxed md:text-[14px] lg:text-[14px] text-[#a5a5a5] font-light">
                        서비스 홍보, 마케팅 및 광고 활용: 신규 강의 및 서비스
                        개발, 맞춤 강의 추천, 이벤트 및 광고성 정보 제공 및 참여
                        기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고
                        게재, 서비스의 유효성 확인을 목적으로 개인정보를
                        처리합니다.
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2B2B2B] pt-4 flex justify-center">
          <Button
            onClick={() => {
              dispatch(setSignUpModal({ isPrivacyTermsOpen: false }));
            }}
            className="bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] w-[110px] h-10 border-2 font-semibold"
          >
            확인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyTermsModal;
