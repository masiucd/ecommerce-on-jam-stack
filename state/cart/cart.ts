import {atom} from "jotai"

interface CartAtom {
  items: Card[]
  total: number
}
const cartAtom = atom<CartAtom>({
  items: [],
  total: 0,
})

const readOnlyCartAtom = atom(get => get(cartAtom))

export {cartAtom, readOnlyCartAtom}
export type {CartAtom}
