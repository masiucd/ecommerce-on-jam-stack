import type {GetStaticProps} from "next/types"
import {FC, Fragment, ReactElement} from "react"

import {Card} from "~components/card"
import Button from "~components/elements/button"
import {InnerLayout, Layout} from "~components/layout"
import Title from "~components/title"
import {getAllCardImages} from "~lib/graph-cms"

interface Props {
  cards: Card[]
}

interface GridProps {
  children: React.ReactNode
  className?: string
}
const Grid: FC<GridProps> = ({children, className}) => (
  <section
    className={`grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-1  mb-4  ${className}`}
  >
    {children}
  </section>
)

const Home = ({cards}: Props): JSX.Element => (
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
        <Card key={card.cardSlug} card={card} />
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
