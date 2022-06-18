import {createContext, FC, useContext, useReducer} from "react"

interface State {
  items: Card[]
  total: number
}

type Action =
  | {type: "ADD_TO_CART"; card: Card}
  | {type: "REMOVE_FROM_CART"; id: string}
  | {type: "CLEAR_CARD"}

type Dispatch = (action: Action) => void
const CartContext = createContext<State | null>(null)
const DispatchContext = createContext<Dispatch | null>(null)

interface Props {
  children: React.ReactNode
}

function addToCart(state: State, card: Card) {
  const cardInCart = state.items.find(item => item.id === card.id)
  if (cardInCart) {
    return state.items.map(item =>
      item.id === card.id ? {...item, quantity: item.quantity + 1} : item
    )
  }
  return [...state.items, {...card, quantity: 1}]
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: addToCart(state, action.card),
        total: state.total + action.card.price,
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(cart => cart.id !== action.id),
        total: decreaseTotal(state, action.id),
      }
    default:
      return state
  }
}

const decreaseTotal = (state: State, id: string) => {
  const item = state.items.find(item => item.id === id)
  if (item) {
    return state.total - item.price
  }
  return state.total
}

const CartProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {items: [], total: 0})
  return (
    <CartContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </CartContext.Provider>
  )
}

const useCartState = () => {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCartState must be used within a CartProvider")
  }
  return ctx
}

const useCartDispatch = () => {
  const dispatch = useContext(DispatchContext)
  if (!dispatch) {
    throw new Error("useCartDispatch must be used within a CartProvider")
  }
  return dispatch
}

export {CartProvider, useCartState, useCartDispatch}
