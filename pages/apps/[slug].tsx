import dynamic from "next/dynamic"
import {GetStaticPaths, GetStaticProps} from "next/types"
import {ParsedUrlQuery} from "node:querystring"
import React, {ReactElement} from "react"

import Layout, {InnerLayout} from "~components/layout/layout"
import Sidebar from "~components/layout/sidebar"

const FileSystem = dynamic(
  () => import("~components/apps/file-system/file-system")
)

interface AppsPathProps extends ParsedUrlQuery {
  slug: string
}
type Props = {
  slug: string
}

const renderApp = (slug: string): JSX.Element => {
  switch (slug) {
    case "copy":
      return <h1>copy</h1>
    case "geoloaction":
      return <h1>geoloaction</h1>
    case "battery":
      return <h1>battery</h1>
    case "file-system":
      return <FileSystem />
    default:
      throw new Error("Unknown app")
  }
}

const AppPage = ({slug}: Props): JSX.Element => {
  return <div>{renderApp(slug)}</div>
}

export const getStaticPaths: GetStaticPaths<AppsPathProps> = async () => {
  let url = null
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000/api/web-apis"
  } else {
    // TODO production url
    url = ""
  }
  const appsData = await fetch(url)
  const apps = await appsData.json()
  const paths = apps.map((app: WebApi) => ({params: {slug: app.name}}))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as AppsPathProps
  return {
    props: {
      slug,
    },
  }
}

AppPage.getLayout = function getLayout(page: ReactElement): JSX.Element {
  return (
    <Layout>
      <InnerLayout>
        <Sidebar styles="col-span-1 h-full" />
        <main className="col-span-4">{page}</main>
      </InnerLayout>
    </Layout>
  )
}

export default AppPage
