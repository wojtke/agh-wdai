export interface Review {
  id: number;
  dish_id: string;

  nick: string;
  title: string;
  body: string;
  rating: number;

  added_date: string;
}
