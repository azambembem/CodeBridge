import type { TUser } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

export const useManageAccountCache = () => {
  const authHeader = useAuthHeader();

  const account = useQuery({
    queryKey: ["manage-account"],
    queryFn: async () => {
      const { data } = await axios<{ user: TUser }>(
        "http://localhost:8080/auth/get-info",
        {
          headers: {
            Authorization: authHeader
          }
        }
      );

      return data?.user;
    }
  });

  return {
    account
  };
};
