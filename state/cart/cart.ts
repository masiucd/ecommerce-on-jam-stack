import {atom} from "jotai"
import {atomWithStorage} from "jotai/utils"

interface CartAtom {
  items: Card[]
  total: number
}
const cartAtom = atom<CartAtom>({
  items: [],
  total: 0,
})

const cartItemsStorageAtom = atomWithStorage<CartAtom | null>("cartItems", null)
const readOnlyCartAtom = atom(get => get(cartAtom))

export {cartAtom, readOnlyCartAtom, cartItemsStorageAtom}
export type {CartAtom}
