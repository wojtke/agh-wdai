export interface Dish {
    _id: string;
    name: string;
    desc: string;
    cuisine: string;
    categories: string[];
    price: string;
    ingredients: string[];
    max_orders: number;
    image_src: string[];
}
