import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

interface PersonalInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PersonalInfoModal: React.FC<PersonalInfoModalProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#2B2B2B] border-[#333333] text-[#eee] max-w-5xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between pb-2 py-2">
          <DialogTitle className="text-[16px] md:text-[18] lg:text-[18px] font-semibold">
            개인정보 처리방침
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto bg-[#262626]">
          <div className="space-y-4 p-4">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p
                  className="text-[13px] leading-relaxed
                   md:text-[14px] lg:text-[14px]
                   text-[#A5A5A5] font-semibold"
                >
                  CodeBridge는 회원님의 개인정보를 안전하게 보호하고, 「개인정보
                  보호법」 등 관계 법령을 준수하여 적법하고 투명하게 처리합니다.
                  이에 따라 정보주체(회원)에게 개인정보 처리 절차와 기준을
                  안내하고, 관련 문의나 요청을 신속히 처리할 수 있도록 다음과
                  같이 개인정보 처리방침을 수립·공개합니다.
                </p>
              </div>
              <div className="py-6 sm:py-8">
                <h2 className="text-[13px] md:text-[14px] lg:text-[14px] font-semibold mb-3 sm:mb-4 text-[#a5a5a5]">
                  개인정보의 처리목적
                </h2>
                <p className="text-[13px] leading-relaxed md:text-[14px] lg:text-[14px] text-[#A5A5A5] font-semibold">
                  CodeBridge는 다음의 목적을 위해 개인정보를 처리합니다. 수집한
                  개인정보는 명시된 목적 이외의 용도로 사용되지 않으며, 이용
                  목적이 변경될 경우 「개인정보 보호법」 제18조에 따라 사전
                  동의를 받습니다.
                </p>
              </div>
              <div className="py-2 sm:py-2 ml-4">
                <ol className="space-y-1 sm:space-y-1">
                  <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5]">
                    <span className="w-1 h-1 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed md:text-[14px] lg:text-[14px]text-[#A5A5A5] font-semibold">
                      회원 가입 및 관리 : 회원 가입 의사 확인, 서비스 이용을
                      위한 본인 식별·인증, 회원자격 유지·관리, 고지·통지, 민원
                      처리 등 회원 관리 목적으로 개인정보를 처리합니다.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5]">
                    <span className="w-1 h-1 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed md:text-[14px] lg:text-[14px]text-[#A5A5A5] font-semibold">
                      강의 신청 및 문의 관리 : 강의 신청, 커리큘럼·가격 등
                      문의에 대한 답변 제공합니다.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5]">
                    <span className="w-1 h-1 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed md:text-[14px] lg:text-[14px]text-[#A5A5A5] font-semibold">
                      강의 및 서비스 제공 : 콘텐츠 제공, 맞춤 강의 추천,
                      결제·정산, 본인 인증 등 관련 문의에 대한 답변 제공합니다.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-sm sm:text-base lg:text-lg leading-relaxed text-[#a5a5a5]">
                    <span className="w-1 h-1 bg-[#a5a5a5] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[13px] leading-relaxed md:text-[14px] lg:text-[14px]text-[#A5A5A5] font-semibold">
                      마케팅 및 광고 활용(선택) : 신규 강의 안내, 이벤트 정보
                      제공, 이용 통계 분석 등 관련 문의에 대한 답변 제공합니다.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <Button
            onClick={onClose}
            className="bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] w-[110px] h-10 font-semibold border-2 border-[#eee]"
          >
            확인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PersonalInfoModal;
