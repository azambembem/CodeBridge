import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface RequiredAgreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequiredAgreeModal: React.FC<RequiredAgreeModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#2B2B2B] border-[#4F4F4F] text-[#EEEEEE] mx-auto w-[320px] h-[225px] sm:w-[360px] sm:h-[230px] lg:w-[360px] lg:h-[230px] rounded-lg">
        <div className="flex flex-col items-center justify-center h-full py-4 text-center">
          <h2 className="text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-5 sm:mb-4 lg:mb-4">
            필수 약관 동의
          </h2>
          <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#a5a5a5] leading-relaxed mb-5 sm:mb-5 lg:mb-5">
            문의 처리를 위해
            <p className="whitespace-nowrap">
              개인정보 수집 및 이용 동의가 필요합니다.
            </p>
          </p>
          <div className="flex justify-center">
            <Button
              onClick={onClose}
              className="bg-[#3B3B3B] text-[#EEEEEE] hover:bg-[#4F4F4F] h-10 text-[13px] md:text-[14px] lg:text-[14px] w-[110px] font-semibold border-2 border-[#eee]"
            >
              확인
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RequiredAgreeModal;
