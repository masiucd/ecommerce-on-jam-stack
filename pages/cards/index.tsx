import React, {ReactElement} from "react"

import {Grid} from "~components/elements/grid"
import {InnerLayout, Layout} from "~components/layout"
import Title from "~components/title"

const CardsPage = () => {
  return (
    <div>
      <Title className="md:text-lg px-2 max-w-4xl m-auto mb-5">
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-lg ">
          Masiu&apos;s Sick images
        </h1>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 drop-shadow-lg	">
          All available cards
        </p>
      </Title>
      {/* TODO client side fetch if we want to lazy Load with pagination? */}
      <Grid>
        <p>Fetch cards here</p>
      </Grid>
    </div>
  )
}

CardsPage.getLayout = function (page: ReactElement): JSX.Element {
  return (
    <Layout>
      <InnerLayout>{page}</InnerLayout>
    </Layout>
  )
}
export default CardsPage
