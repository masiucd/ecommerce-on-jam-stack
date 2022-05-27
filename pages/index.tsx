import type {GetStaticProps} from "next"
import Head from "next/head"
import Link from "next/link"
import {ReactElement} from "react"

import Layout, {InnerLayout} from "~components/layout/layout"
import Sidebar from "~components/layout/sidebar"

type HomePageProps = {
  data: Array<WebApi> | null
}
const HomePage = ({data}: HomePageProps): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Browser API`&apos;`S</title>
        <meta name="description" content="Different browser APi's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul className="p-2">
        {data !== null &&
          data.map(({name}) => (
            <li key={name}>
              <Link href={`/apps/${name}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let data = null
  if (process.env.NODE_ENV === "development") {
    const webApisList = await fetch("http://localhost:3000/api/web-apis")
    data = await webApisList.json()
  } else {
    // TODO production url
    // const webApisList = await fetch("http://localhost:3000/api/web-apis")
    // data = await webApisList.json()
  }

  return {props: {data}}
}

HomePage.getLayout = function getLayout(page: ReactElement): JSX.Element {
  return (
    <Layout>
      <InnerLayout>
        <Sidebar styles="col-span-1 h-full" />
        <main className="col-span-4">{page}</main>
      </InnerLayout>
    </Layout>
  )
}

export default HomePage
