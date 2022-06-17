function addToCart(items: Card[], newItem: Card) {
  const item = items.find(item => item.id === newItem.id)

  if (item) {
    return items.map(i => ({...i, quantity: i.quantity + 1}))
  }
  return [...items, {...newItem, quantity: 1}]
}

export {addToCart}
