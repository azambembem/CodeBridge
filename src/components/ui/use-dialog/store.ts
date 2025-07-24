import { create } from "zustand";
import { DialogStore } from "./types";

export const useDialogStore = create<DialogStore>((set, get) => ({
  alerts: [],
  addAlert: (alert) => {
    const id = Math.random().toString(36).substring(7);
    set((state) => ({
      alerts: [
        ...state.alerts,
        {
          ...alert,
          id,
          isLoading: false,
        },
      ],
    }));
    return id;
  },
  removeAlert: (id) =>
    set((state) => ({
      alerts: state.alerts.filter((alert) => alert.id !== id),
    })),
  setLoading: (id, loading) =>
    set((state) => ({
      alerts: state.alerts.map((alert) =>
        alert.id === id ? { ...alert, isLoading: loading } : alert
      ),
    })),
  showDialog: (options) => {
    get().addAlert({
      ...options,
      variant: options.variant || "default", // Agar variant berilmasa, 'default' bo'ladi
    });
  },
}));
