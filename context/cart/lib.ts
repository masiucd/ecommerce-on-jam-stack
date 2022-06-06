import type {CartItem} from "./types"

function addToCart(items: CartItem[], newItem: CartItem) {
  const item = items.find(item => item.id === newItem.id)

  return item
    ? items.map(i => ({...i, quantity: i.quantity + 1}))
    : [...items, newItem]
}

export {addToCart}
