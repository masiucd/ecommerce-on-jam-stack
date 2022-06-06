import {Dispatch, ReactNode, useContext, useReducer} from "react"
import {createContext, FC} from "react"

import {addToCart} from "./lib"
import type {Action, State} from "./types"

interface Props {
  children: ReactNode
}

const CartDispatch = createContext<Dispatch<Action> | undefined>(undefined)

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: addToCart(state.cart, action.card),
        total: state.total + action.card.price,
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(card => card.id !== action.card.id),
        total: state.total - action.card.price,
      }
    default:
      throw new Error(`Unknown action type`)
  }
}

const CartContext = createContext<State | null>(null)
const initialState: State = {cart: [], total: 0}

const CartProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={state}>
      <CartDispatch.Provider value={dispatch}>{children}</CartDispatch.Provider>
    </CartContext.Provider>
  )
}

const useCartDispatch = () => {
  const ctx = useContext(CartDispatch)
  if (!ctx) {
    throw new Error(`useCartDispatch must be used within a CartDispatch`)
  }
  return ctx
}

const useCartState = () => {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error(`useCartDispatch must be used within a CartContext`)
  }
  return ctx
}

export {CartProvider, useCartState, useCartDispatch}
