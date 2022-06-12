// import request, {gql} from "graphql-request"
import type {GetStaticProps} from "next/types"
import React, {ReactElement} from "react"

import {Card} from "~components/card"
import {Grid} from "~components/elements/grid"
import {InnerLayout, Layout} from "~components/layout"
import Title from "~components/title"
import {getAllCardImages} from "~lib/graph-cms"

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

const FIRST_CARDS = 8

interface Props {
  cards: Card[]
}

const CardsPage = ({cards}: Props) => {
  // const {data, error} = useSWR(foo, fetcher)
  // if (!data) {
  //   return <div>loading</div>
  // }

  // console.log(data)

  return (
    <div>
      <Title className="md:text-lg px-2 max-w-4xl m-auto mb-5">
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-500 drop-shadow-lg ">
          Masiu&apos;s Sick images
        </h1>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 drop-shadow-lg	">
          All available cards
        </p>
      </Title>
      {/* TODO client side fetch if we want to lazy Load with pagination? */}
      <Grid>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            addToCart={() => {
              // updateValue(value => addToCartAction(card, value))
              // console.log("Click")
            }}
          />
        ))}
      </Grid>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const cards = await getAllCardImages(FIRST_CARDS)
  return {
    props: {
      cards,
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
