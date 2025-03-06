import { useAxios } from "@/hooks/useAxios";
import type { QueryResult } from "@/types";
import type { IProduct } from "@/types/home";
import type { TUser } from "@/types/user";
import type { TWishlist } from "@/types/wishlist";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { v4 } from "uuid";

type WishlistCache = {
    wishlists: QueryResult<TWishlist[]>;

}

export const useWishlistCache = (): WishlistCache => {
    const axios = useAxios()
    const isAuthenticated = useIsAuthenticated();

    const wishlists = useQuery({
        queryKey: ["wishlist/cache"],
        queryFn: async () => {
            const { data } = await axios<TWishlist[]>({
                method: "GET",
                url: "/wishlists",
            })

            return data.data;
        },
        enabled: Boolean(isAuthenticated),
    
    })
    return {
        wishlists
    }
}

type ON_TOGGLE = (T: IProduct) => void;
type IS_TOGGLED = (T: IProduct) => boolean; 

type WishlistFeatures = {
    onToggle: ON_TOGGLE;
    isToggled: IS_TOGGLED;
};

export const useWishlistFeature = (): WishlistFeatures => {
	const user = useAuthUser<TUser>();
	const axios = useAxios();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const isAuthenticated = useIsAuthenticated();


	const onToggle: ON_TOGGLE = (product) => {
        if (!isAuthenticated) {
            
             toast("Please sign in!", {
                 description: "In order to add a product to your wishlist, you need to sign in.",
                 duration: 3000,
              });
			

			return navigate("/sign-in");
		}

		const wishlist = queryClient.getQueryData<TWishlist[]>(["wishlists/cache"]);

		if (!wishlist) return;

		const foundProduct = wishlist.find(({ product_id }) => {
			return product_id._id === product._id;
		});

        if (foundProduct) {
             toast("Wishlist is remove", {
				description: "You have removed this product from your wishlist.",
                 duration: 3000,
              });
		

			axios({
				url: `/wishlist/${product._id}`,
				method: "DELETE",
				data: {
					product_id: product._id,
				},
			});

			return queryClient.setQueryData<TWishlist[]>(
				["wishlists/cache"],
				wishlist.filter(({ product_id }) => {
					return product_id._id !== product._id;
				}),
			);
		}

		axios({
			url: "/wishlist",
			method: "POST",
			data: {
				product_id: product._id,
			},
		});

		
        
         toast("Wishlist is added", {
			description: "You have added this product to your wishlist.",
                 duration: 3000,
              });

			return queryClient.setQueryData<TWishlist[]>(
			["wishlists/cache"],
			(wishlist) => {
				if (!wishlist) return;

				return [
					...wishlist,
					{
						_id: v4(),
						user_id: String(user?._id),
						product_id: product,
						created_at: new Date().toISOString(),
					},
				];
			},
		);
	};

	const isToggled: IS_TOGGLED = (product) => {
		const wishlist = queryClient.getQueryData<TWishlist[]>(["wishlists/cache"]);

		if (!wishlist) return false;

		return wishlist.some(({ product_id }) => {
			return product_id._id === product._id;
		});
	};

	return {
		onToggle,
		isToggled,
	};
};