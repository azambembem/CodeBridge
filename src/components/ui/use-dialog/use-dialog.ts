import { useDialogStore } from "./store";
import { DialogOptions } from "./types";

export const useDialog = () => {
  const { addAlert } = useDialogStore();

  return {
    showDialog: (options: DialogOptions) => {
      return addAlert(options);
    },
  };
};
