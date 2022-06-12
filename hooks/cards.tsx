import request, {gql} from "graphql-request"
import useSWR from "swr"

const fetcher = (query: string) =>
  request(process.env.NEXT_PUBLIC_API_KEY_GRAPHCMS_PROJECT_API ?? "", query)

const CARDS_QUERY = gql`
  query CardIages {
    cardImages {
      name
      id
    }
  }
`
const useCards = (form: number, to: number) => {
  const {data, error} = useSWR(CARDS_QUERY, fetcher)
  return {data, error}
}

export {useCards}
