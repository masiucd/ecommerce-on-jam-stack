import type {GetStaticPaths, GetStaticProps} from "next/types"
import {ParsedUrlQuery} from "node:querystring"
import {ReactElement} from "react"

import {Card} from "~components/card"
import Cart from "~components/icons/cart"
import {InnerLayout, Layout} from "~components/layout"
import {getCardBySlug, getCardSlugs} from "~lib/graph-cms"

interface Props {
  card: Card
}
const CardItemPage = ({card}: Props) => {
  return (
    <aside>
      <div className="max-w-4xl m-auto flex flex-col md:flex-row justify-between shadow rounded-md">
        <div className="flex-1">
          <Card singleCard card={card} />
        </div>
        <div className="flex-1 flex items-center flex-col justify-center">
          <h3 className="text-4xl mb-2 text-34xl bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-500 drop-shadow-lg ">
            {card.name}
          </h3>
          <p className="mb-2">
            {card.description.text}, ${card.price}{" "}
          </p>
          <button
            type="button"
            className="flex border border-slate-700 rounded-md p-1 items-center gap-2"
          >
            Add to cart
            <span role="image">
              <Cart width={20} height={20} />
            </span>
          </button>
        </div>
      </div>
    </aside>
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
  const card = await getCardBySlug(slug)
  return {
    props: {
      card,
    },
  }
}

CardItemPage.getLayout = function (page: ReactElement): JSX.Element {
  return (
    <Layout>
      <InnerLayout className="grid items-center">{page}</InnerLayout>
    </Layout>
  )
}

export default CardItemPage
