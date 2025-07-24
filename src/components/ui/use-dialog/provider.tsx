"use client";

import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useDialogStore } from "./store";
import { DialogProviderProps, DialogItem } from "./types";

export function DialogProvider({ children }: DialogProviderProps) {
  const { alerts, removeAlert, setLoading } = useDialogStore();

  const handleConfirm = async (
    e: React.MouseEvent,
    alertId: string,
    // onConfirm: () => Promise<any>
    onConfirm: () => Promise<void>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      setLoading(alertId, true);
      await onConfirm();
      removeAlert(alertId);
    } catch (error) {
      console.error("Error in dialog confirmation:", error);
      setLoading(alertId, false);
    }
  };

  const renderDialogContent = (alert: DialogItem) => {
    switch (alert.variant) {
      case "password-error":
        return (
          // <div className="space-y-2 text-[#EEEEEE] mx-auto">
          //   <div className="p-2 sm:p-4 lg:p-6 text-center">
          //     <h3 className="text-[#eee] text-base sm:text-lg lg:text-xl font-pre mb-3 sm:mb-4 lg:mb-6">
          //       {alert.title}
          //     </h3>
          //     <div className="space-y-2 text-sm text-[#eee]">
          //       <p className="text-sm sm:text-base lg:text-lg font-pre text-[#eee] leading-relaxed mb-4 sm:mb-6 lg:mb-8">
          //         잘못된 비밀번호입니다.
          //         <br />
          //         로그인 시도 10회 실패 시 접속이 제한됩니다.
          //       </p>
          //       {alert.attemptCount && (
          //         <p className="text-[#FF7B7B] font-medium">
          //           로그인 {alert.attemptCount}회 실패
          //         </p>
          //       )}
          //     </div>
          //   </div>
          // </div>
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-4">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title}
              </h3>
              <div className="mt-4 space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#A5A5A5] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description}
                </p>
                {alert.attemptCount && (
                  <p className="text-[#FF7B7B] font-light text-[13px]">
                    로그인 {alert.attemptCount}회 실패
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case "account-blocked":
        return (
          // <div className="space-y-2 text-[#EEEEEE] mx-auto">
          //   <div className="p-2 sm:p-4 lg:p-6 text-center">
          //     <h3 className="text-[#eee] text-base sm:text-lg lg:text-xl font-pre mb-3 sm:mb-4 lg:mb-6">
          //       {alert.title}
          //     </h3>
          //     <div className="space-y-2 text-sm text-[#eee]">
          //       <p className="text-sm sm:text-base lg:text-lg font-pre text-[#eee] leading-relaxed mb-4 sm:mb-6 lg:mb-8">
          //         로그인 시도가 10회 실패하여 접속이 제한 되었습니다.
          //         <span>
          //           이메일 인증을 통해 접속 제한을 해제하시기 바랍니다.
          //         </span>
          //       </p>
          //       <div className="mt-4 space-y-2">
          //         <p className="text-[#FF7B7B] font-medium">
          //           아래 주소로 인증 메일이 전송 되었습니다.
          //         </p>
          //         {alert.email && (
          //           <p className="text-[#FF7B7B] font-medium text-xs sm:text-sm break-all">
          //             {alert.email}
          //           </p>
          //         )}
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-4 sm:py-1 md:py-4 lg:py-4 ">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-8 sm:mb-6 md:mb-6 lg:mb-6">
                {alert.title}
              </h3>
              <div className="space-y-3">
                <p
                  className="text-[12px] font-light font-pre
                 text-[#A5A5A5] leading-relaxed mb-8 md:mb-6 lg:mb-6"
                >
                  {alert.description}
                </p>
                <p className="text-[#FF7B7B] font-light text-[13px]">
                  아래 주소로 인증 메일이 전송 되었습니다.
                </p>
                {alert.email && (
                  <p className="text-[#FF7B7B] font-light text-[13px] break-all">
                    {alert.email}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      case "withdrawal-agreement": // <-- YANGI: Yangi variant uchun holat
        return (
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-2">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title}
                {/* "마케팅 정보 수신 동의 철회" */}
              </h3>
              <div className="space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#eee] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description} {/* "동의 철회" va sana */}
                </p>
              </div>
            </div>
          </div>
        );
      case "marketing-agreement": // <-- YANGI: Marketing modal uchun kontent
        return (
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-2">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title} {/* "마케팅 정보 수신 동의" */}
              </h3>
              <div className="space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#eee] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description} {/* "동의 완료" va sana */}
                </p>
              </div>
            </div>
          </div>
        );

      case "marketing-withdrawal": // <-- YANGI: Marketing Withdrawal modal uchun kontent
        return (
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-2">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title} {/* "마케팅 정보 수신 동의 철회" */}
              </h3>
              <div className="space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#eee] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description} {/* "동의 철회" va sana */}
                </p>
              </div>
            </div>
          </div>
        );

      case "rename":
        return (
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-2">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title}
              </h3>
              <div className="space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#eee] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description}
                </p>
              </div>
            </div>
          </div>
        );

      case "my-profile-password-error":
        return (
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-4">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title}
              </h3>
              <div className="space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#eee] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description}
                </p>
              </div>
            </div>
          </div>
        );

      case "unsubscribe-process":
        return (
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-4">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title}
              </h3>
              <div className="space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#A5A5A5] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description}
                </p>
              </div>
            </div>
          </div>
        );

      case "non-existent-accounts":
        return (
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-4">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title}
              </h3>
              <div className="space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#A5A5A5] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description}
                </p>
              </div>
            </div>
          </div>
        );
      case "account-already-exists":
        return (
          <div className="space-y-3 text-[#EEEEEE] mx-auto">
            <div className="text-center py-4">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title}
              </h3>
              <div className="space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#A5A5A5] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description}
                </p>
              </div>
            </div>
          </div>
        );

      case "forgot-password":
        return (
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-4">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title}
              </h3>
              <div className="space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#A5A5A5] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description}
                </p>
              </div>
            </div>
          </div>
        );

      case "already-used-your-free-trial":
        return (
          <div className="space-y-2 text-[#EEEEEE] mx-auto">
            <div className="text-center py-4">
              <h3 className="text-[#eee] text-[14px] md:text-[16px] lg:text-[16px] font-semibold mb-2 md:mb-2 lg:mb-2">
                {alert.title}
              </h3>
              <div className="space-y-2">
                <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light text-[#A5A5A5] leading-relaxed mb-4 md:mb-2 lg:mb-2">
                  {alert.description}
                </p>
              </div>
            </div>
          </div>
        );
      default: // 'default' and undefined cases
        return (
          <div className="space-y-4 text-[#EEEEEE] mx-auto">
            <div className="p-2 sm:p-4 lg:p-6">
              <h3 className="text-[#eee] text-base sm:text-lg lg:text-xl font-pre mb-3 sm:mb-4 lg:mb-6">
                {alert.title}
              </h3>
              <div className="space-y-2 text-sm sm:text-base lg:text-lg font-pre text-[#eee] leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                {typeof alert.description === "string" ? (
                  <p>{alert.description}</p>
                ) : (
                  alert.description
                )}
              </div>
            </div>
          </div>
        );
    }
  };

  // const renderDialogFooter = (alert: DialogItem) => {
  //   const showTwoButtons =
  //     alert.showCancel !== false && alert.confirmText && alert.cancelText;

  //   if (!showTwoButtons) {
  //     // Single button layout (center aligned)
  //     return (
  //       <div className="flex justify-center pt-4">
  //         <Button
  //           type="button"
  //           disabled={alert.isLoading}
  //           onClick={(e) => handleConfirm(e, alert.id, alert.onConfirm)}
  //           className="bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] border-2 px-8 py-2 rounded min-w-[110px] h-10 sm:h-10 lg:h-10 text-sm sm:text-base lg:text-lg font-pre"

  //         >
  //           {alert.isLoading ? (
  //             <>
  //               <Loader className="animate-spin w-8 h-8 mr-2" />
  //               <span>{alert.loadingText || "처리중..."}</span>
  //             </>
  //           ) : (
  //             alert.confirmText || "확인"
  //           )}
  //         </Button>
  //       </div>
  //     );
  //   }

  //   // Two button layout
  //   return (
  //     <div className="flex justify-center space-x-3">
  //       <Button
  //         type="button"
  //         variant="outline"
  //         disabled={alert.isLoading}
  //         onClick={() => removeAlert(alert.id)}
  //         className="bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] px-8 py-2 rounded min-w-[110px] h-10 sm:h-12 lg:h-14 text-sm sm:text-base lg:text-lg font-pre"
  //       >
  //         {alert.cancelText || "취소"}
  //       </Button>
  //       <Button
  //         type="button"
  //         disabled={alert.isLoading}
  //         onClick={(e) => handleConfirm(e, alert.id, alert.onConfirm)}
  //         className="bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] px-8 py-2 rounded min-w-[110px] h-10 sm:h-12 lg:h-14 text-sm sm:text-base lg:text-lg font-pre"
  //       >
  //         {alert.isLoading ? (
  //           <>
  //             <Loader className="animate-spin w-4 h-4 mr-2" />
  //             <span>{alert.loadingText || "처리중..."}</span>
  //           </>
  //         ) : (
  //           alert.confirmText || "확인"
  //         )}
  //       </Button>
  //     </div>
  //   );
  // };
  // const renderDialogFooter = (alert: DialogItem) => {
  //   const showTwoButtons =
  //     alert.showCancel !== false && alert.confirmText && alert.cancelText;

  //   const isNonExistent = alert.variant === "non-existent-accounts";
  //   const isAccountBlocked = alert.variant === "account-blocked";

  //   if (!showTwoButtons) {
  //     // Single button layout (center aligned)
  //     return (
  //       <div className="flex justify-center pt-4">
  //         <Button
  //           type="button"
  //           disabled={alert.isLoading}
  //           onClick={(e) => handleConfirm(e, alert.id, alert.onConfirm)}
  //           className={cn(
  //             "bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] border-2 px-8 py-2 rounded text-sm sm:text-base lg:text-lg font-pre",
  //             isNonExistent
  //               ? "min-w-[120px] h-[40px]" // ✅ faqat shu variant uchun
  //               : "min-w-[110px] h-10 sm:h-10 lg:h-10"
  //           )}
  //         >
  //           {alert.isLoading ? (
  //             <>
  //               <Loader className="animate-spin w-8 h-8 mr-2" />
  //               <span>{alert.loadingText || "처리중..."}</span>
  //             </>
  //           ) : (
  //             alert.confirmText || "확인"
  //           )}
  //         </Button>
  //       </div>
  //     );
  //   }

  //   // Two button layout
  //   return (
  //     <div className="flex justify-center space-x-3">
  //       <Button
  //         type="button"
  //         variant="outline"
  //         disabled={alert.isLoading}
  //         onClick={() => removeAlert(alert.id)}
  //         className={cn(
  //           "bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] hover:text-[#eee] px-8 py-2 rounded text-[13px] md:text-[14px] font-semibold",
  //           isNonExistent
  //             ? "min-w-[110px] h-[40px]"
  //             : "min-w-[110px] h-10 sm:h-10 lg:h-10"
  //         )}
  //       >
  //         {alert.cancelText || "취소"}
  //       </Button>
  //       <Button
  //         type="button"
  //         disabled={alert.isLoading}
  //         onClick={(e) => handleConfirm(e, alert.id, alert.onConfirm)}
  //         className={cn(
  //           "bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] px-8 py-2 rounded text-[13px] md:text-[14px] font-semibold",
  //           isNonExistent
  //             ? "min-w-[110px] h-[40px]"
  //             : "min-w-[110px] h-10 sm:h-10 lg:h-10"
  //         )}
  //       >
  //         {alert.isLoading ? (
  //           <>
  //             <Loader className="animate-spin w-4 h-4 mr-2" />
  //             <span>{alert.loadingText || "처리중..."}</span>
  //           </>
  //         ) : (
  //           alert.confirmText || "확인"
  //         )}
  //       </Button>
  //     </div>
  //   );
  // };

  const renderDialogFooter = (alert: DialogItem) => {
    const showTwoButtons =
      alert.showCancel !== false && alert.confirmText && alert.cancelText;

    const isNonExistent = alert.variant === "non-existent-accounts";
    const isAccountBlocked = alert.variant === "account-blocked";

    if (!showTwoButtons) {
      return (
        <div className="flex justify-center pt-4">
          <Button
            type="button"
            disabled={alert.isLoading}
            onClick={(e) => handleConfirm(e, alert.id, alert.onConfirm)}
            className={cn(
              "bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] border-2 px-8 py-2 rounded text-sm sm:text-base lg:text-lg font-pre",
              isNonExistent || isAccountBlocked
                ? "min-w-[110px] h-[40px]"
                : "min-w-[110px] h-10 sm:h-10 lg:h-10"
            )}
          >
            {alert.isLoading ? (
              <>
                <Loader className="animate-spin w-8 h-8 mr-2" />
                <span>{alert.loadingText || "처리중..."}</span>
              </>
            ) : (
              alert.confirmText || "확인"
            )}
          </Button>
        </div>
      );
    }

    // Two buttons
    return (
      <div className="flex justify-center space-x-3">
        {/* <Button
          type="button"
          variant="outline"
          disabled={alert.isLoading}
          onClick={() => removeAlert(alert.id)}
          className={cn(
            "bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] px-8 py-2 rounded text-[13px] md:text-[14px] font-semibold",
            isNonExistent || isAccountBlocked
              ? "min-w-[110px] h-[40px]"
              : "min-w-[110px] h-10 sm:h-10 lg:h-10"
          )}
        >
          {alert.cancelText || "취소"}
        </Button>
        <Button
          type="button"
          disabled={alert.isLoading}
          onClick={(e) => handleConfirm(e, alert.id, alert.onConfirm)}
          className={cn(
            "bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] px-8 py-2 rounded text-[13px] md:text-[14px] font-semibold",
            isNonExistent || isAccountBlocked
              ? "min-w-[110px] h-[40px]"
              : "min-w-[110px] h-10 sm:h-10 lg:h-10"
          )}
        >
          {alert.isLoading ? (
            <>
              <Loader className="animate-spin w-4 h-4 mr-2" />
              <span>{alert.loadingText || "처리중..."}</span>
            </>
          ) : (
            alert.confirmText || "확인"
          )}
        </Button> */}
        <Button
          type="button"
          variant="outline"
          disabled={alert.isLoading}
          onClick={() => removeAlert(alert.id)}
          className={cn(
            "bg-[#3B3B3B] hover:bg-[#4F4F4F] hover:text-[#eee] text-[#eee] px-0 rounded text-[13px] md:text-[14px] font-semibold text-center truncate whitespace-nowrap",
            isNonExistent || isAccountBlocked
              ? "w-[120px] h-[40px]"
              : "w-[120px] h-10 sm:h-10 lg:h-10"
          )}
        >
          {alert.cancelText || "취소"}
        </Button>
        <Button
          type="button"
          disabled={alert.isLoading}
          onClick={(e) => handleConfirm(e, alert.id, alert.onConfirm)}
          className={cn(
            "bg-[#3B3B3B] hover:bg-[#4F4F4F] text-[#eee] hover:text-[#eee] px-0 rounded text-[13px] md:text-[14px] font-semibold text-center truncate whitespace-nowrap",
            isNonExistent || isAccountBlocked
              ? "w-[120px] h-[40px]"
              : "w-[120px] h-10 sm:h-10 lg:h-10"
          )}
        >
          {alert.isLoading ? (
            <>
              <Loader className="animate-spin w-4 h-4 mr-2" />
              <span>{alert.loadingText || "처리중..."}</span>
            </>
          ) : (
            alert.confirmText || "확인"
          )}
        </Button>
      </div>
    );
  };

  return (
    <>
      {children}
      {alerts.map((alert) => (
        <AlertDialog
          key={alert.id}
          open={true}
          onOpenChange={(open) => {
            if (!open && !alert.isLoading) {
              removeAlert(alert.id);
            }
          }}
        >
          {/* <AlertDialogContent
            className={cn(
              "bg-[#3A3A3A] border-[#5A5A5A] p-0 overflow-hidden",
              alert.variant === "account-blocked"
                ? "max-w-[95vw] sm:max-w-lg lg:max-w-xl w-full"
                : alert.variant === "withdrawal-agreement" // <-- YANGI: Bu variant uchun o'lcham
                ? "max-w-[90vw] sm:max-w-md" // Sizning rasmga mos keladigan kenglik
                : "max-w-[90vw] sm:max-w-md" // Boshqa default o'lchamlar
            )}
            onEscapeKeyDown={(e) => e.preventDefault()}
            {...({
              onPointerDownOutside: (e) => e.preventDefault(),
            } as any)}
          > */}

          <AlertDialogContent
            className={cn(
              "bg-[#2b2b2b] border-[#333] p-0 overflow-hidden rounded-lg",

              // alert.variant === "account-blocked" &&
              //   "w-full max-w-[95vw] sm:max-w-lg lg:max-w-xl",
              alert.variant === "account-blocked" &&
                "w-[90vw] max-w-[320px] md:max-w-[480px] h-[320px] mx-auto",

              alert.variant === "withdrawal-agreement" &&
                "w-[320px] md:w-[360px] h-[225px] md:h-[230px]",

              alert.variant === "marketing-withdrawal" &&
                "w-[320px] md:w-[360px] h-[225px] md:h-[230px] ",

              alert.variant === "marketing-agreement" &&
                "w-[320px] md:w-[360px] h-[225px] md:h-[230px]",
              alert.variant === "rename" &&
                "w-[320px] md:w-[360px] h-[225px] md:h-[230px]",
              alert.variant === "my-profile-password-error" &&
                "w-[320px] md:w-[360px] h-[225px] md:h-[230px]",
              alert.variant === "unsubscribe-process" &&
                "w-[320px] md:w-[360px] h-[225px] md:h-[230px]",
              // alert.variant === "non-existent-accounts" &&
              //   "w-[320px] md:w-[360px] h-[225px] md:h-[230px]",
              alert.variant === "non-existent-accounts" &&
                "w-[90vw] max-w-[320px] md:max-w-[360px] h-[225px] md:h-[230px] mx-auto",
              alert.variant === "password-error" &&
                "w-[90vw] max-w-[320px] md:max-w-[360px] h-[289px] md:h-[294px] mx-auto",
              alert.variant === "account-already-exists" &&
                "w-[90vw] max-w-[320px] md:max-w-[360px] h-[225px] md:h-[230px] mx-auto",
              alert.variant === "forgot-password" &&
                "w-[90vw] max-w-[320px] md:max-w-[360px] h-[225px] md:h-[230px] mx-auto",
              alert.variant === "already-used-your-free-trial" &&
                "w-[320px] md:w-[360px] h-[225px] md:h-[230px]",

              alert.variant === "password-error" && "w-[360px] h-[260px]",

              // Fallback: default style account-already-exists

              ![
                "account-blocked",
                "withdrawal-agreement",
                "marketing-withdrawal",
                "marketing-agreement",
                "rename",
                "password-error",
                // "my-profile-password-error", // optional
                // "unsubscribe-process", // optional
                // "non-existent-accounts", // <-- ✅ BUNi QO‘SHING
              ].includes(alert.variant) && "max-w-[90vw] sm:max-w-md"
            )}
            onEscapeKeyDown={(e) => e.preventDefault()}
            {...({
              onPointerDownOutside: (e) => e.preventDefault(),
            } as any)}
          >
            {/* Custom styled dialog without default AlertDialog components */}
            <div className="p-6 sm:p-8">
              {renderDialogContent(alert)}
              {renderDialogFooter(alert)}
            </div>
          </AlertDialogContent>
        </AlertDialog>
      ))}
    </>
  );
}
