import {CartProvider, useCartState} from "context/cart/cart-provider"
import {AnimatePresence, motion} from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import React, {FC, Fragment} from "react"

import Cart from "~components/icons/cart"
import navItems from "~data/nav-items.json"
import useHasMounted from "~hooks/mounted"
import useToggle, {UseToggle} from "~hooks/toggle"

interface CartBoxProps {
  on: boolean
  handlers: UseToggle[1]
}
const CartBox = ({on, handlers}: CartBoxProps) => {
  const mounted = useHasMounted()
  const {total} = useCartState()
  return (
    <div className="cart flex items-center gap-2 min-w-[7rem] justify-center">
      <button
        type="button"
        onClick={handlers.toggle}
        className={`${on ? "border-2 border-white p-1 rounded-md" : ""} `}
      >
        <span role="image">
          <Cart on={on} />
        </span>
      </button>
      <span>${mounted && total.toFixed(2)}</span>
    </div>
  )
}

interface LayoutTitleProps {
  styles?: string
}
const LayoutTitle = ({styles = ""}: LayoutTitleProps) => (
  <Link href="/">
    <a
      className={`text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-teal-500 block hover:scale-105 transition-all ease-out ${styles}`}
    >
      Masiu&apos;s Sick images
    </a>
  </Link>
)

const Header = () => {
  const [on, handlers] = useToggle()
  const {items} = useCartState()
  return (
    <header className="h-[10vh] mb-3 bg-slate-800 flex items-center text-slate-100 shadow-md">
      <div className="w-[90%] md:w-[80%] m-auto  flex justify-between">
        <LayoutTitle />
        <nav className="flex flex-1">
          <ul className="px-2 hidden sm:flex sm:w-[60%] md:w-[50%] justify-evenly m-auto">
            {navItems.map(({name, path}) => (
              <li key={name} className="hover:text-teal-300 capitalize">
                <Link href={path}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <CartBox on={on} handlers={handlers} />
      </div>
      <AnimatePresence>
        {on && (
          <motion.aside
            initial={{opacity: 0.45, x: "100%"}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0.55, x: "100%"}}
            transition={{duration: 0.45, ease: "easeInOut"}}
            className="fixed top-0 right-0 h-full md:w-3/5 w-full bg-slate-100 z-10 text-slate-900 shadow-sm"
          >
            <div className="border border-red-500 flex items-center p-2">
              <button
                type="button"
                onClick={handlers.toFalse}
                className="text-slate-900 z-30 text-2xl p-1 ml-auto hover:text-teal-500"
              >
                <span role="image flex">X</span>
              </button>
            </div>

            <ul>
              {items.length > 0
                ? items.map(item => (
                    <li key={item.id}>
                      {item.name}
                      {item.quantity}
                    </li>
                  ))
                : null}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}

const Footer = () => {
  const date = new Date()
  return (
    <footer className="h-[10vh] shadow-md bg-slate-800 flex items-center text-slate-100">
      <div className="w-[90%] md:w-[80%] m-auto py-2 flex flex-col items-center justify-center ">
        <LayoutTitle styles="pb-1" />
        <small>&copy; Masiu&apos;s Sick images {date.getFullYear()} </small>
      </div>
    </footer>
  )
}

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
