import {GetStaticPaths, GetStaticProps} from "next/types"
import {ParsedUrlQuery} from "node:querystring"
import React, {ReactElement} from "react"

import Layout, {InnerLayout} from "~components/layout/layout"
import Sidebar from "~components/layout/sidebar"

interface AppsPathProps extends ParsedUrlQuery {
  slug: string
}
type Props = {
  slug: string
}
const AppPage = ({slug}: Props): JSX.Element => {
  return <div>AppPage {slug}</div>
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
