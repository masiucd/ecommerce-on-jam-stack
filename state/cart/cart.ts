import {atom} from "jotai"

interface CartAtom {
  items: Card[]
  total: number
}
const cartAtom = atom<CartAtom>({
  items: [],
  total: 0,
})

export {cartAtom}
