export interface IProduct {
    id: number;
    title: string;
    description: string;
    image: string;
    price: string;
    category: string;
    rating: Rating;
}

export interface IProducts {
    products: IProduct[];
}



interface Rating {
    count: number;
    rate: number;
}




