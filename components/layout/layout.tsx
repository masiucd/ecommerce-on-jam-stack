import Head from "next/head"

type Props = {
  children: React.ReactNode
  title?: string
}
export default function Layout({
  children,
  title = "Browser Web Api's",
}: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Different browser APi's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="h-[7vh] mb-2 shadow-md flex items-center">
        <h3>Web Api</h3>
      </header>
      {children}
      <footer className="h-[10vh] border"></footer>
    </>
  )
}

type InnerLayoutProps = {
  children: React.ReactNode
}
export const InnerLayout = ({children}: InnerLayoutProps): JSX.Element => (
  <div className="grid grid-cols-5 gap-2 justify-center items-center mx-auto px-1 border border-red-500 min-h-[calc(100vh-20vh)]">
    {children}
  </div>
)
