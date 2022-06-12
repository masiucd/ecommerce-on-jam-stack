import {CartAtom} from "./cart"
import {addToCart} from "./lib"

const addToCartAction = (card: Card, value: CartAtom) => ({
  ...value,
  items: addToCart(value.items, card),
  total: value.total + card.price,
})

const setCartData = (card: Card, value: CartAtom) =>
  addToCartAction(card, value)

export {setCartData}
