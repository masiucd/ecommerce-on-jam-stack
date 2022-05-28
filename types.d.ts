type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

type WebApi = {
  name: string
}

export {}

declare global {
  interface Window {
    showOpenFilePicker: any
  }
}
