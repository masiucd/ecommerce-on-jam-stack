interface CartItem extends Card {
  quantity: number
}

interface State {
  cart: CartItem[]
  total: number
}

type Action =
  | {type: "ADD_TO_CART"; card: CartItem}
  | {type: "REMOVE_FROM_CART"; card: CartItem}

export type {CartItem, State, Action}
