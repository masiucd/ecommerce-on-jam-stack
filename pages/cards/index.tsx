// import request, {gql} from "graphql-request"
import Fuse from "fuse.js"
import type {GetStaticProps} from "next/types"
import React, {ChangeEvent, ReactElement, useState} from "react"

import {Card} from "~components/card"
import FilterBox from "~components/cards/filter-box"
import {Grid} from "~components/elements/grid"
import {InnerLayout, Layout} from "~components/layout"
import Title from "~components/title"
import {getAllCardImages} from "~lib/graph-cms"
import {getMockedCards} from "~lib/mocked-cards"
import {getMockedTypes} from "~lib/mocked-types"

// const fetcher = (query: string) =>
//   request(process.env.NEXT_PUBLIC_API_KEY_GRAPHCMS_PROJECT_API ?? "", query)

// const foo = gql`
//   query CardIages {
//     cardImages {
//       name
//       id
//     }
//   }
// `

function renderCards(
  cards: Card[],
  filteredCards: null | Card[],
  selectedType: string | null
) {
  const cardsToMapOver = filteredCards !== null ? filteredCards : cards
  if (selectedType !== null) {
    return cardsToMapOver
      .filter(card => card.type.includes(selectedType))
      .map(card => (
        <Card
          key={card.id}
          card={card}
          addToCart={() => {
            // console.log("Click")
          }}
        />
      ))
  }
  return cardsToMapOver.map(card => (
    <Card
      key={card.id}
      card={card}
      addToCart={() => {
        // console.log("Click")
      }}
    />
  ))
}

const FIRST_CARDS = 9

interface Props {
  cards: Card[]
  types: string[]
}

const CardsPage = ({cards, types}: Props) => {
  const [selected, setSelected] = useState<null | string>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")
  // const {data, error} = useSWR(foo, fetcher)
  // if (!data) {
  //   return <div>loading</div>
  // }

  let filteredCards: null | Card[] = null
  // console.log(data)
  if (searchQuery) {
    const fuse = new Fuse(cards, {
      keys: ["name"],
    })
    filteredCards = fuse.search(searchQuery).map(({item}) => item)
  }

  return (
    <section>
      <Title className="md:text-lg px-2 max-w-4xl m-auto mb-5">
        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-500 drop-shadow-lg ">
          Masiu&apos;s Sick images
        </h1>
        <h2 className="bg-clip-text text-3xl text-transparent bg-gradient-to-r from-blue-500 to-violet-500 drop-shadow-lg	">
          All available cards
        </h2>
      </Title>
      <FilterBox
        types={types}
        selected={selected}
        setSelectedType={(type: string | null) => {
          setSelected(type)
        }}
        searchByText={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value)
        }}
      />
      {/* TODO client side fetch if we want to lazy Load with pagination? */}
      <Grid>{renderCards(cards, filteredCards, selected)}</Grid>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let cards: Array<Card>
  let types: Array<string>
  if (process.env.NODE_ENV === "production") {
    cards = await getAllCardImages(FIRST_CARDS)
    const typesList = cards.flatMap(card => card.type)
    types = Array.from(new Set(typesList))
  } else {
    cards = getMockedCards(0, 9)
    types = getMockedTypes()
  }
  return {
    props: {
      cards,
      types,
    },
  }
}

CardsPage.getLayout = function (page: ReactElement): JSX.Element {
  return (
    <Layout>
      <InnerLayout>{page}</InnerLayout>
    </Layout>
  )
}
export default CardsPage
