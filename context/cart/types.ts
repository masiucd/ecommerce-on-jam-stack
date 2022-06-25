interface State {
  items: Card[]
}

type Action =
  | {type: "ADD_TO_CART"; card: Card}
  | {type: "DECREASE_CART_ITEM"; id: string}
  | {type: "INCREASE_CART_ITEM"; id: string}
  | {type: "REMOVE_FROM_CART"; id: string}
  | {type: "UPDATE_CART"; items: Card[]}
  | {type: "CLEAR_CART"}

type Dispatch = (action: Action) => void

export type {State, Action, Dispatch}
