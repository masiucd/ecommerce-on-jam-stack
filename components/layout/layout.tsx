import Link from "next/link"
import React, {FC, Fragment} from "react"
import Cart from "~components/icons/cart"

type Props = {
  children: React.ReactNode
}

const CartBox = () => (
  <div className="cart flex items-center  gap-3">
    <span role="image">
      <Cart />
    </span>
    <span className="price">$0.00</span>
  </div>
)

interface LayoutTitleProps {
  styles?: string
}
const LayoutTitle = ({styles = ""}: LayoutTitleProps) => (
  <strong className={`text-xl ${styles}`}>Masiu&apos;s Sick images</strong>
)

const navItems = [
  {name: "items", path: "/items"},
  {name: "checkout", path: "/checkout"},
  {name: "contact", path: "/contact"},
]

const Header = () => {
  return (
    <header className="h-[10vh] mb-2 bg-blue-600 flex items-center text-white">
      <div className="w-[90%] md:w-[80%] m-auto  flex justify-between">
        <LayoutTitle />
        <nav className="flex flex-1">
          <ul className="px-2  hidden sm:flex sm:w-[60%] md:w-[50%] justify-evenly m-auto">
            {navItems.map(({name, path}) => (
              <li key={name}>
                <Link href={path}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <CartBox />
      </div>
    </header>
  )
}

const Footer = () => {
  const date = new Date()
  return (
    <footer className="h-[10vh] bg-blue-600 text-white ">
      <div className="w-[90%] md:w-[80%] m-auto py-2 flex flex-col items-center justify-center ">
        <LayoutTitle styles="pb-1" />
        <small>&copy; Masiu&apos;s Sick images {date.getFullYear()} </small>
      </div>
    </footer>
  )
}

const Layout: FC<Props> = ({children}) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

const InnerLayout: FC<Props> = ({children}) => (
  <main className="border-2 border-red-600 min-h-[calc(100vh-20vh)] m-auto max-w-[90%] md:max-w-[80%] mb-2 ">
    {children}
  </main>
)
export {InnerLayout}
export default Layout
