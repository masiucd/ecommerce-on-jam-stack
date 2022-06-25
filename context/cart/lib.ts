import type {State} from "./types"

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

function decreaseItem(state: State, id: string) {
  const itemToDecrease = getCartItemById(state, id)
  if (itemToDecrease) {
    if (itemToDecrease.quantity === 1) {
      return removeItem(state, id)
    } else {
      return state.items.map(item =>
        item.id === itemToDecrease.id
          ? {...item, quantity: item.quantity - 1}
          : item
      )
    }
  }
  return [...state.items]
}

function getCartItemById(state: State, id: string) {
  return state.items.find(item => item.id === id)
}

function increaseItem(state: State, id: string) {
  const itemToIncrease = getCartItemById(state, id)
  if (itemToIncrease) {
    return state.items.map(item =>
      item.id === itemToIncrease.id
        ? {...item, quantity: item.quantity + 1}
        : item
    )
  }
  return [...state.items]
}

function removeItem(state: State, id: string) {
  return state.items.filter(cart => cart.id !== id)
}

export {addToCart, decreaseItem, removeItem, increaseItem}
