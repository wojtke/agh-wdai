export interface Review {
  _id: number;
  dish_id: string;
  user_id: string;

  title: string;
  body: string;
  rating: number;

  added_date: string;
}
