import type {GetStaticProps, NextPage} from "next"
import Head from "next/head"
import Link from "next/link"

type WebApi = {
  name: string
}
type HomePageProps = {
  data: Array<WebApi> | null
}
const Home: NextPage<HomePageProps> = ({data}) => {
  return (
    <div>
      <Head>
        <title>Browser API`&apos;`S</title>
        <meta name="description" content="Different browser APi's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data !== null &&
        data.map(({name}) => (
          <li key={name}>
            <Link href={`/app/${name}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
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

export default Home
