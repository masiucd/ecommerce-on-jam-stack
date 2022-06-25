import {createContext, FC, useContext, useEffect, useReducer} from "react"

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
const CartContext = createContext<State | null>(null)
const DispatchContext = createContext<Dispatch | null>(null)

interface Props {
  children: React.ReactNode
}

function addToCart(state: State, card: Card) {
  const cardInCart = state.items.find(item => item.id === card.id)
  if (cardInCart) {
    const items = state.items.map(item =>
      item.id === card.id ? {...item, quantity: item.quantity + 1} : item
    )
    sessionStorage.setItem("cart", JSON.stringify(items))
    return items
  }
  const items = [...state.items, {...card, quantity: 1}]
  sessionStorage.setItem("cart", JSON.stringify(items))
  return items
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
      }
    case "INCREASE_CART_ITEM":
      return {
        ...state,
      }
    case "UPDATE_CART":
      return {
        ...state,
        items: action.items,
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(cart => cart.id !== action.id),
      }
    default:
      return state
  }
}

const calculateTotalPrice = (items: Array<Card>): number =>
  items.reduce((acc, item) => acc + item.quantity * item.price, 0)

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
