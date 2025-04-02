import { useAxios } from "@/hooks/useAxios";
import type { QueryResult } from "@/types";
import type { TBilling } from "@/types/billing";
import type { TUser } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

type BillingService = {
  billing: QueryResult<TBilling>;
};

export const useBillingService = (): BillingService => {
  const axios = useAxios();
  const user = useAuthUser<TUser>();

  const billing = useQuery({
    queryKey: ["billing"],
    queryFn: async () => {
      const { data } = await axios<TBilling>({
        url: `/billing/${user?._id}`,
        method: "GET"
      });

      return data.data;
    },
    enabled: Boolean(user) // ?
  });

  return {
    billing
  };
};
