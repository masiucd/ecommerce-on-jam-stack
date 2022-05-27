import type {GetStaticProps} from "next"
import Link from "next/link"
import {ReactElement} from "react"

import Layout, {InnerLayout} from "~components/layout/layout"
import Sidebar from "~components/layout/sidebar"

type HomePageProps = {
  data: Array<WebApi> | null
}
const HomePage = ({data}: HomePageProps): JSX.Element => {
  return (
    <div className="h-[40vh] flex items-center justify-center px-4 rounded-md shadow-md">
      <ul className="p-2 flex flex-col items-center justify-center h-[90%] w-full">
        {data !== null &&
          data.map(({name}) => (
            <li
              key={name}
              className="text-2xl relative capitalize mb-2 p-2 hover:text-fuchsia-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-fuchsia-400 after:w-0 after:h-1 after:hover:w-full after:transition-all after:duration-400"
            >
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
