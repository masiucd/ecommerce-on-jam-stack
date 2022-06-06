import {GraphQLClient} from "graphql-request"

const graphcms = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API ?? "")

const getAllCardImages = async (first = 6): Promise<HashMap<Array<Card>>> => {
  const {cardImages} = await graphcms.request(
    `
  query CardImages($first: Int!) {
    cardImages(first: $first) {
      id
      name
      description {
        text
      }
      image
      price
    }
  }  
    `,
    {first}
  )
  return cardImages
}

export {getAllCardImages, graphcms}
