import { ContactUsForm } from "@/types/home";
import { MutationResult } from "@/types/shared";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type ON_SUBMIT = MutationResult<ContactUsForm>;

export const useContactFeatures = () => {
  const onSubmit: ON_SUBMIT = useMutation({
    mutationFn: async (data) => {
      await axios<ON_SUBMIT>("http://localhost:8080/general/contact-us", {
        method: "POST",
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          enquire: data.enquire,
          organization_name: data.organization_name,
        },
      });
    },
  });

  return {
    onSubmit,
  };
};
