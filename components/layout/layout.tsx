import Head from "next/head"

type Props = {
  children: React.ReactNode
  title?: string
}
export default function Layout({
  children,
  title = "Web Apis",
}: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="h-[10vh] border">
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
  <div className="grid grid-col-1 md:grid-cols-5 gap-2 justify-center items-center mx-auto px-1 border border-red-500 min-h-[calc(100vh-20vh)]">
    {children}
  </div>
)
