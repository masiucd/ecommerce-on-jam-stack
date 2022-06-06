import {useAtom} from "jotai"
import type {GetStaticProps} from "next/types"
import {Fragment, ReactElement} from "react"

import {Card} from "~components/card"
import Button from "~components/elements/button"
import {Grid} from "~components/elements/grid"
import {InnerLayout, Layout} from "~components/layout"
import Title from "~components/title"
import {getAllCardImages} from "~lib/graph-cms"
import {cartAtom} from "~state/cart"

interface Props {
  cards: Card[]
}

function addToCart(items: Card[], newItem: Card) {
  const item = items.find(item => item.id === newItem.id)
  return item
    ? items.map(i => ({...i, quantity: i.quantity + 1}))
    : [...items, {...newItem, quantity: 1}]
}

const Home = ({cards}: Props): JSX.Element => {
  const [_, updateValue] = useAtom(cartAtom)

  return (
    <Fragment>
      <Title className="md:text-lg px-2 max-w-5xl m-auto">
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-lg">
          Masiu&apos;s Sick images
        </h1>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 drop-shadow-lg	">
          Top 6 images of the week
        </p>
      </Title>
      <Grid className="max-w-5xl m-auto">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            addToCart={() => {
              updateValue(value => ({
                ...value,

                items: addToCart(value.items, card),
                total: value.total + card.price,
              }))
            }}
          />
        ))}
      </Grid>
      <aside className="flex justify-evenly md:max-w-[20rem] m-auto">
        <Button href="/cards">
          <span>All cards</span>
        </Button>
        <Button href="/contact">
          <span>Get in touch</span>
        </Button>
      </aside>
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
