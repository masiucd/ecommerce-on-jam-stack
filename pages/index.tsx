import {useCartDispatch} from "context/cart/cart-provider"
import type {GetStaticProps} from "next/types"
import {Fragment, ReactElement} from "react"

import {Card} from "~components/card"
import {Grid} from "~components/elements/grid"
import {Description} from "~components/home"
import {InnerLayout, Layout} from "~components/layout"
import Title from "~components/title"
import {getAllCardImages} from "~lib/graph-cms"
import {getMockedCards} from "~lib/mocked-cards"

interface Props {
  cards: Card[]
}

const Home = ({cards}: Props): JSX.Element => {
  const dispatch = useCartDispatch()

  return (
    <Fragment>
      <Title className="md:text-lg px-2 leading-8">
        <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-500 drop-shadow-lg mb-1 p-0">
          Masiu&apos;s Sick cards
        </h1>
      </Title>
      <Description />
      <fieldset className="border border-teal-400 px-2 rounded-md shadow mb-5">
        <legend className="mb-5 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 drop-shadow-lg	">
          Top 6 images of the week:
        </legend>
        <Grid className="max-w-4xl m-auto rounded-md">
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              addToCart={() => {
                dispatch({type: "ADD_TO_CART", card})
              }}
            />
          ))}
        </Grid>
      </fieldset>
    </Fragment>
  )
}

Home.getLayout = function (page: ReactElement): JSX.Element {
  return (
    <Layout>
      <InnerLayout>{page}</InnerLayout>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let cards
  if (process.env.NODE_ENV === "production") {
    cards = await getAllCardImages()
  } else {
    cards = getMockedCards()
  }
  return {
    props: {
      cards,
    },
  }
}

export default Home
