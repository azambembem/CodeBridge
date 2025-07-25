import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSignUpModal } from "@/redux/stores/sign-up";

const ServiceTermsModal = () => {
  const dispatch = useReduxDispatch();
  const { isServiceTermsOpen } = useReduxSelector(
    ({ signUpModal }) => signUpModal
  );

  return (
    <Dialog
      open={isServiceTermsOpen}
      onOpenChange={() => {
        dispatch(setSignUpModal({ isServiceTermsOpen: false }));
      }}
    >
      <DialogContent className="bg-[#2B2B2B] border-[#4F4F4F] text-[#eee] max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between border-b border-[#262626] pb-4">
          <DialogTitle className="text-[16px] md:text-[18px] font-semibold">
            서비스 이용약관
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto  bg-[#262626]">
          <div className="space-y-4 p-4">
            <div>
              <h2 className="text-[13px] md:text-[14px] lg:text-[14px] font-light mb-3 sm:mb-4 text-[#a5a5a5]">
                제1조 목적
              </h2>
              <p className="text-[12px] leading-relaxed md:text-[14px] lg:text-[14px] text-[#a5a5a5] font-light">
                이 약관은 주식회사 투피트(이하 “회사”)가 운영하고 제공하는
                서비스(이하 “서비스”)를 이용함에 있어 “회사”와 “회원”과의 권리,
                의무, 책임사항 및 필요사항의 규정을 목적으로 합니다.
              </p>
            </div>

            <div className="py-6 sm:py-8">
              <h2 className="text-[13px] md:text-[14px] lg:text-[14px] font-light mb-4 sm:mb-6 text-[#a5a5a5]">
                제2조 용어의 정의
              </h2>
              <p className="text-[12px] leading-relaxed md:text-[14px] lg:text-[14px] text-[#a5a5a5] font-light">
                본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              </p>
              <ol className="list-decimal list-outside pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-[12px] leading-relaxed md:text-[14px] lg:text-[14px] text-[#a5a5a5] font-light">
                <li>
                  “서비스”란 회사가 인터넷 웹 등을 통해 직접 구성한 소프트웨어
                  또는 용역(이하 “용역”)을 이용하거나 컨설팅을 제공하는 서비스를
                  말합니다.
                </li>
                <li>
                  “회원”이란 본 약관에 동의하고 서비스를 이용하는 사용자를
                  말합니다.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2B2B2B] pt-4 flex justify-center">
          <Button
            onClick={() => {
              dispatch(setSignUpModal({ isServiceTermsOpen: false }));
            }}
            className="bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] font-semibold w-[110px] h-10 border-2"
          >
            확인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceTermsModal;
