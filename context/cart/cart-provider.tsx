import {createContext, FC, useContext, useEffect, useReducer} from "react"

import {addToCart, decreaseItem, increaseItem, removeItem} from "./lib"
import type {Action, Dispatch, State} from "./types"

const CartContext = createContext<State | null>(null)
const DispatchContext = createContext<Dispatch | null>(null)

interface Props {
  children: React.ReactNode
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: addToCart(state, action.card),
      }
    case "DECREASE_CART_ITEM":
      return {
        ...state,
        items: decreaseItem(state, action.id),
      }
    case "INCREASE_CART_ITEM":
      return {
        ...state,
        // items: state.items.map(item =>
        //   item.id === action.id ? {...item, quantity: item.quantity + 1} : item
        // ),
        items: increaseItem(state, action.id),
      }
    case "UPDATE_CART":
      return {
        ...state,
        items: action.items,
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: removeItem(state, action.id),
      }
    default:
      return state
  }
}

const calculateTotalPrice = (items: Array<Card>): string =>
  items.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)

const calculateTotalPriceForItem = (item: Card): string =>
  `${(item.quantity * item.price).toFixed(2)}$`

const CartProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {items: []})
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
  const dispatch = useCartDispatch()
  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("cart")
    const storedCartItems: Array<Card> = stored && JSON.parse(stored)

    if (Array.isArray(storedCartItems) && storedCartItems.length) {
      dispatch({type: "UPDATE_CART", items: storedCartItems})
    }
  }, [dispatch])

  useEffect(() => {
    const storedItems = JSON.stringify(ctx.items)
    typeof window !== "undefined" && localStorage.setItem("cart", storedItems)
  }, [ctx.items])

  return ctx
}

const useCartDispatch = () => {
  const dispatch = useContext(DispatchContext)
  if (!dispatch) {
    throw new Error("useCartDispatch must be used within a CartProvider")
  }
  return dispatch
}

export {
  CartProvider,
  useCartState,
  useCartDispatch,
  calculateTotalPrice,
  calculateTotalPriceForItem,
}
