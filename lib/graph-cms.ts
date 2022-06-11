import {gql, GraphQLClient, request} from "graphql-request"
const URL = process.env.NEXT_PUBLIC_API_KEY_GRAPHCMS_PROJECT_API ?? ""
const graphcms = new GraphQLClient(URL)

const ALL_CARDS_QUERY = gql`
  query CardImages($first: Int!) {
    cardImages(first: $first) {
      id
      name
      description {
        text
      }
      image
      price
      cardSlug
    }
  }
`

const CARD_SLUGS = gql`
  query CardSlugs($first: Int!) {
    cardImages(first: $first) {
      id
      cardSlug
    }
  }
`

const CARD_BY_SLUG_QUERY = gql`
  query CardBySlug($cardSlug: String!) {
    cardImage(where: {cardSlug: $cardSlug}) {
      name
      id
      image
      cardSlug
      price
    }
  }
`

const getAllCardImages = async (first = 6): Promise<HashMap<Array<Card>>> => {
  const {cardImages} = await request(URL, ALL_CARDS_QUERY, {first})
  return cardImages
}

type CardWithOnlySlug = Pick<Card, "cardSlug" | "id">
const getCardSlugs = async (first = 6): Promise<Array<CardWithOnlySlug>> => {
  const {cardImages} = await request(URL, CARD_SLUGS, {first})
  return cardImages
}

const getCardBySlug = async (slug: string): Promise<Card> => {
  const {cardImage} = await request(URL, CARD_BY_SLUG_QUERY, {cardSlug: slug})
  return cardImage
}

export {getAllCardImages, graphcms, getCardSlugs, getCardBySlug}
