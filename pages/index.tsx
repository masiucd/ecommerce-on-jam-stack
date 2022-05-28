import type {GetStaticProps} from "next"
import dynamic from "next/dynamic"
import {ReactElement} from "react"

import Layout from "~components/layout/layout"
import {WebApi} from "~types/types"

const AppDataList = dynamic(() => import("~components/lists/app-data"))

type HomePageProps = {
  data: Array<WebApi> | null
}

const HomePage = ({data}: HomePageProps): JSX.Element => {
  return (
    <div className="min-h-[35vh] flex flex-col items-center justify-center px-4 rounded-md shadow-md ">
      <div className="flex flex-col justify-center text-2xl mb-auto">
        <h1 className="text-[1.4em] md:text-[2em] mb-4">
          Welcome to web api &apos; s
        </h1>
      </div>
      {data && <AppDataList data={data} />}
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
  return <Layout>{page}</Layout>
}

export default HomePage
