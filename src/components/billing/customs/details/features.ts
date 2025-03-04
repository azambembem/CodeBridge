import type { AxiosResponse, MutationResult } from "@/types";
import type { BillingForm, TBilling } from "@/types/billing";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

export type ON_SUBMIT = MutationResult<BillingForm>

type DetailsFeatures = {
    onSubmit: ON_SUBMIT; 

}

export const useDetailsFeatures = (): DetailsFeatures => {
    const authHeader = useAuthHeader()

    console.log(authHeader);
    
    const onSubmit: ON_SUBMIT  = useMutation({
        mutationFn: async (values) => {
            const { data } = await axios.post<AxiosResponse<TBilling>
          >(`${import.meta.env.VITE_MAIN_APP}/billing/`, values,

            {
                headers: {
                    Authorization: authHeader

                }
            }
          );


          console.log(data);
          
         
        },
    })

    return {
        onSubmit,
    };
}