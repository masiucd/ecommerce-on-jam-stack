import type {GetStaticProps} from "next"
import dynamic from "next/dynamic"
import {ReactElement, useState} from "react"

import Layout, {InnerLayout} from "~components/layout/layout"
import Sidebar from "~components/layout/sidebar"

const AppDataList = dynamic(() => import("~components/lists/app-data"))

type HomePageProps = {
  data: Array<WebApi> | null
}
const HomePage = ({data}: HomePageProps): JSX.Element => {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center px-4 rounded-md shadow-md">
      <div className="mb-auto flex flex-col justify-center text-2xl">
        <h1 className="text-[1.4em] md:text-[2em] mb-4">
          Welcome to web api &apos; s
        </h1>
        <button onClick={(): void => setOpen(!open)}>
          {open ? "Hide" : "View"} Apps
        </button>
      </div>
      {data && <AppDataList open={open} data={data} />}
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
        <Sidebar />
        <main className="col-span-full md:col-span-4">
          <div className=" max-w[90%] max-w-[80%] mx-auto">{page}</div>
        </main>
      </InnerLayout>
    </Layout>
  )
}

export default HomePage
