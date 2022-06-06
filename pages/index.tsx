import {useAtom} from "jotai"
import type {GetStaticProps} from "next/types"
import {Fragment, ReactElement} from "react"

import {Card} from "~components/card"
import {Grid} from "~components/elements/grid"
import {Description} from "~components/home"
import {InnerLayout, Layout} from "~components/layout"
import Title from "~components/title"
import {getAllCardImages} from "~lib/graph-cms"
import {addToCartAction, cartAtom} from "~state/cart"

interface Props {
  cards: Card[]
}

const Home = ({cards}: Props): JSX.Element => {
  const [, updateValue] = useAtom(cartAtom)
  return (
    <Fragment>
      <Title className="md:text-lg px-2 max-w-4xl m-auto mb-5">
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-lg ">
          Masiu&apos;s Sick images
        </h1>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 drop-shadow-lg	">
          Top 6 images of the week
        </p>
      </Title>
      <Grid className="max-w-4xl m-auto shadow rounded-md p-3">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            addToCart={() => {
              updateValue(value => addToCartAction(card, value))
            }}
          />
        ))}
      </Grid>
      <Description />
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
  const cards = await getAllCardImages()
  return {
    props: {
      cards,
    },
  }
}

export default Home
