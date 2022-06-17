import {atom} from "jotai"
import {atomWithStorage} from "jotai/utils"

interface CartAtom {
  items: Card[]
  total: number
}

const cartItemsStorageAtom = atomWithStorage<CartAtom>("cartItems", {
  items: [],
  total: 0,
})
const readOnlyCartItemsAtom = atom(get => get(cartItemsStorageAtom).items)
const readOnlyCartTotalAtom = atom(get => get(cartItemsStorageAtom).total)

export {readOnlyCartItemsAtom, readOnlyCartTotalAtom, cartItemsStorageAtom}
export type {CartAtom}
