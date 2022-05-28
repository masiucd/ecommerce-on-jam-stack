import {AppProps} from "next/app"
import {NextPage} from "next/types"
import {ReactElement} from "react"

type WebApi = {
  name: string
}
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
export type {WebApi, NextPageWithLayout, AppPropsWithLayout}
