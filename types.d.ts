type Card = {
  id: string
  name: string
  image: string
  cardSlug: string
  price: number
  quantity: number
}

type HashMap<T> = {
  [string]: T
}
// type HashMap<K extends keyof any, T> = {
//   [P in K]: T
// }
