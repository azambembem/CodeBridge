export type ICategory = {
    _id: string;
    name: string;
    created_at: string;
    updated_at: string;
    __v: 0
};

export type IProduct = {
    hashtags: string[];
    _id: string;
    name: string;
    category: null | ICategory;
    star: number;
    price: number;
    discount: number;
    total_count : number;
    total_sold: number;
    created_at: string;
    updated_at: string;
    main_image: string;
    images: string[];
    __v: number;
}












   
   
