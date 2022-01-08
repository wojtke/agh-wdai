export interface Dish {
    _id: string;
    name: string;
    desc: string;
    cuisine: string;
    categories: string[];
    price: {
        value: number;
        currency: string;
    };
    ingredients: string[];
    max_orders: number;
    image_src: string[];
}
