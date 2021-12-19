import {Dish} from '../models/Dish';

export const DISHES: Dish[] = [
    {
        id: 1,
        name: 'Pizza Margherita',
        cusine: 'italian',
        categories: ['main', 'vegan'],
        price: '$12.99',
        ingredients: ['flour', 'mozzarella', 'tomatoes'],
        max_orders: 3,

        image_src: '/assets/images/pizza-small.jpg',

    },
    {
        id: 2,
        name: 'Pizza Peperoni',
        cusine: 'italian',
        categories: ['main', 'hot'],
        price: '$15.99',
        ingredients: ['flour', 'mozzarella', 'tomatoes', 'peperoni'],
        max_orders: 6,

        image_src: '/assets/images/pizza-small.jpg',

    },
    {
        id: 3,
        name: 'Pizza Prosciutto',
        cusine: 'italian',
        categories: ['main'],
        price: '$17.99',
        ingredients: ['flour', 'mozzarella', 'tomatoes', 'prosciutto'],
        max_orders: 2,

        image_src: '/assets/images/pizza-small.jpg',

    },
    {
        id: 4,
        name: 'Makaron z kurczakiem',
        cusine: 'chinese',
        categories: ['main', 'vegan'],
        price: '$57.99',
        ingredients: [],
        max_orders: 10,

        image_src: '/assets/images/makaron.jpg',

    },
    {
        id: 5,
        name: 'Spaghetti bolognese',
        cusine: 'italian',
        categories: ['main', 'meat'],
        price: '$32.99',
        ingredients: ["meat"],
        max_orders: 45,

        image_src: '/assets/images/makaron.jpg',
    },
    {
        id: 6,
        name: 'Spaghetti carbonara',
        cusine: 'italian',
        categories: ['main', 'meat'],
        price: '$35.99',
        ingredients: ["meat", "eggs"],
        max_orders: 35,

        image_src: '/assets/images/makaron.jpg',
    },
    {
        id: 7,
        name: 'Makaron ze szpinakiem',
        cusine: 'italian',
        categories: ['main', 'vegan', 'vegetarian'],
        price: '$875.99',
        ingredients: ["makaron", "szpinak"],
        max_orders: 4,

        image_src: '/assets/images/makaron.jpg',
    },
    {
        id: 8,
        name: 'Burger z czymkolwiek',
        cusine: 'american',
        categories: ['main', 'vegan', 'vegetarian', 'meat', 'hot'],
        price: '$2.99',
        ingredients: ["cokolwiek", "buła"],
        max_orders: 1231,

        image_src: '/assets/images/burger.jpg',
    },
    {
        id: 9,
        name: 'Burger meksykański',
        cusine: 'mexican',
        categories: ['main', 'meat', 'hot'],
        price: '$12.99',
        ingredients: ["bun", "pepper"],
        max_orders: 121,

        image_src: '/assets/images/burger.jpg',
    },
    {
        id: 10,
        name: 'Burger z tofu ',
        cusine: 'mexican',
        categories: ['main', 'vegan', 'vegetarian'],
        price: '$312.99',
        ingredients: ["bun", "tofu"],
        max_orders: 14,

        image_src: '/assets/images/burger.jpg',
    },
    {
        id: 11,
        name: 'Burger z chinczykiem ',
        cusine: 'chinese',
        categories: ['main', 'meat', 'hot', 'appetizer'],
        price: '$3612.99',
        ingredients: ["bun", "tofu"],
        max_orders: 1,

        image_src: '/assets/images/burger.jpg',
    },
    {
        id: 12,
        name: 'Sok z kurczaka',
        cusine: 'international',
        categories: ['drink', 'meat', 'hot', 'appetizer'],
        price: '$1.99',
        ingredients: ["kurczak", "szklanka"],
        max_orders: 111,

        image_src: '/assets/images/sok.jpg',
    },
    {
        id: 13,
        name: 'Sok sojowy',
        cusine: 'international',
        categories: ['drink', 'vegan', 'vegetarian', 'appetizer'],
        price: '$2.99',
        ingredients: ["soja", "szklanka"],
        max_orders: 111,

        image_src: '/assets/images/sok.jpg',
    }
]
