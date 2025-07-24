import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

export type ModalVariant =
  | "account-not-found"
  | "password-error"
  | "account-blocked"
  | "default"
  | "success"
  | "withdrawal-agreement"
  | "marketing-agreement"
  | "marketing-withdrawal"
  | "rename"
  | "my-profile-password-error"
  | "unsubscribe-process"
  | "non-existent-accounts"
  | "account-already-exists"
  | "forgot-password"
  | "already-used-your-free-trial";

export type DialogItem = {
  id: string;
  title: string;
  description: string | React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => Promise<any>;
  isLoading?: boolean;
  loadingText?: string;
  confirmButtonProps?: ComponentProps<typeof Button>;
  showCancel?: boolean;

  variant?: ModalVariant;
  email?: string;
  attemptCount?: number;
  onSecondaryAction?: () => Promise<any>;
  secondaryActionText?: string;
};

export type DialogOptions = Omit<DialogItem, "id" | "isLoading">;

export type DialogStore = {
  alerts: DialogItem[];
  addAlert: (alert: DialogOptions) => string;
  removeAlert: (id: string) => void;
  setLoading: (id: string, loading: boolean) => void;
  showDialog: (options: DialogOptions) => void; // yangi
};

export type DialogProviderProps = {
  children: React.ReactNode;
};
