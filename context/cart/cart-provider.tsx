import {createContext, FC, useContext, useReducer} from "react"

interface State {
  items: Card[]
  total: number
}

type Action =
  | {type: "ADD_TO_CAR"; card: Card}
  | {type: "REMOVE_FROM_CAR"; id: string}
  | {type: "CLEAR_CARD"}
type Dispatch = (action: Action) => void
const CartContext = createContext<State | null>(null)
const DispatchContext = createContext<Dispatch | null>(null)

interface Props {
  children: React.ReactNode
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_TO_CAR":
      return {
        ...state,
      }
    default:
      return state
  }
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
