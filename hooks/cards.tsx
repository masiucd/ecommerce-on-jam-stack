import useSWR from "swr"

import {request} from "~lib/graph-cms"

const fetcher = (query: string) =>
  request(
    "https://api-eu-west-2.graphcms.com/v2/cl3y32vx917wz01v04mrcd5j0/master" ??
      "",
    query
  )

const useGetCards = () => {
  const {data, error} = useSWR(
    `query CardIages{
      cardImages {
        name
        id
      }
    }`,

    fetcher
  )
  console.log("data", data)
  return {data, error}
}

export {useGetCards}
