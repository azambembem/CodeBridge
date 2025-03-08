import { useAxios } from "@/hooks/useAxios";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setInitialState } from "@/redux/slices/wishlist";
import { useBillingService } from "@/services/billing";
import type {AxiosResponse, MutationResult } from "@/types";
import type { BillingForm, TBilling } from "@/types/billing";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export type ON_SUBMIT = MutationResult<BillingForm>

type DetailsFeatures = {
    onSubmit: ON_SUBMIT; 

}

export const useDetailsFeatures = (): DetailsFeatures => {
    const axios = useAxios()
    const navigate = useNavigate();
    const dispatch = useReduxDispatch()
    const queryClient = useQueryClient();
    const {products} = useReduxSelector(({wishlist})=> wishlist)

    const {billing: {data:billing}} = useBillingService();
    
    const onSubmit: ON_SUBMIT  = useMutation({
        mutationFn: async (values) => {
          try {
            if(!billing) {
                const { data } = await axios<TBilling>({
                    url: `/billing`, 
                    data: values,
                method: "POST"
            });
              queryClient.setQueryData<TBilling>(["billing"], data.data);
            } 
             await axios<TBilling>({
                url: "/purchase/init", 
                method: "POST",
                data: {
                    billing_id: billing?._id,
                    products: products.map((product)=> {
                        return {
                            product_id: product._id,
                            quantity: product.quantity
                        }
    
                    })
                }
            })
    
            toast("축가하합니다!", {
                description: "성공적으로 등록되었습니다",
              });

              navigate("/");

              dispatch(setInitialState());
      
              
            
          } catch (error) {
            const { response } = error as AxiosError<AxiosResponse>;

            toast.error("오류가 발생했습니다", {
                description: `${response?.data?.message}`,
                
              });
            
          }
        },
    });

    return {
        onSubmit,
    };
};