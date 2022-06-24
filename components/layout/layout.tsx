import {CartProvider} from "context/cart/cart-provider"
import Head from "next/head"
import React, {FC, Fragment} from "react"

import {Footer} from "./footer"
import {Header} from "./header"

type Props = {
  children: React.ReactNode
  title?: string
}

const Layout: FC<Props> = ({children, title = "Sick imags"}) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Sick images to support Ukraine" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CartProvider>
      <Header />
      {children}
    </CartProvider>
    <Footer />
  </Fragment>
)

interface InnerLayoutProps {
  className?: string
  children: React.ReactNode
}
const InnerLayout: FC<InnerLayoutProps> = ({children, className = ""}) => (
  <main
    className={`min-h-[calc(100vh-20vh)] m-auto max-w-[90%] md:max-w-[65%] mb-2 ${className}`}
  >
    {children}
  </main>
)
export {Layout, InnerLayout}
