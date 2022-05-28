import dynamic from "next/dynamic"
import {GetStaticPaths, GetStaticProps} from "next/types"
import {ParsedUrlQuery} from "node:querystring"
import React, {Fragment, ReactElement} from "react"

import Layout from "~components/layout/layout"
import {WebApi} from "~types/types"

const FileSystem = dynamic(
  () => import("~components/apps/file-system/file-system")
)
const Geolocation = dynamic(
  () => import("~components/apps/geolocation/geolocation")
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
      return <Geolocation />
    case "file-system":
      return <FileSystem />
    case "page-visibility":
      return <h1>page-visibility</h1>
    default:
      throw new Error("Unknown app")
  }
}

const AppPage = ({slug}: Props): JSX.Element => {
  return <Fragment>{renderApp(slug)}</Fragment>
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
  return <Layout>{page}</Layout>
}

export default AppPage
