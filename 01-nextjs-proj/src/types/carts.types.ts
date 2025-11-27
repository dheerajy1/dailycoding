export interface CartItem {
  id: number;           // product id
  quantity: number;     // quantity in cart
}

export type Cart = CartItem[];
