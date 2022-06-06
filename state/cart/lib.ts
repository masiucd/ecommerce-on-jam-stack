function addToCart(items: Card[], newItem: Card) {
  const item = items.find(item => item.id === newItem.id)
  return item
    ? items.map(i => ({...i, quantity: i.quantity + 1}))
    : [...items, {...newItem, quantity: 1}]
}

export {addToCart}
