import type {GetStaticPaths, GetStaticProps} from "next/types"
import {ParsedUrlQuery} from "node:querystring"
import React from "react"
import {Card} from "~components/card"

import {getCardBySlug, getCardSlugs} from "~lib/graph-cms"

interface Props {
  card: Card
}
const CardItemPage = ({card}: Props) => {
  console.log({card})
  return (
    <div>
      <div>
        <h1>{card.name}</h1>
      </div>
      <div className="max-w-[25rem]">
        <Card
          card={card}
          addToCart={() => {
            console.log("Click")
          }}
        />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cardSlugs = await getCardSlugs(100)
  const paths = cardSlugs.map(({cardSlug}) => ({params: {slug: cardSlug}}))
  return {
    paths,
    fallback: false,
  }
}

interface CardProps extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as CardProps
  // TODO get image by slug!
  const card = await getCardBySlug(slug)
  return {
    props: {
      card,
    },
  }
}

export default CardItemPage
