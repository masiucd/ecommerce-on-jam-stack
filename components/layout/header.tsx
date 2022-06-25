import {calculateTotalPrice, useCartState} from "context/cart/cart-provider"
import dynamic from "next/dynamic"
import Link from "next/link"

import Cart from "~components/icons/cart"
import navItems from "~data/nav-items.json"
import useHasMounted from "~hooks/mounted"
import useToggle, {UseToggle} from "~hooks/toggle"

import {LayoutTitle} from "./layout-title"

const CartSide = dynamic(() => import("~components/cart/cart-side"))

interface CartBoxProps {
  on: boolean
  handlers: UseToggle[1]
}

const CartBox = ({on, handlers}: CartBoxProps) => {
  const mounted = useHasMounted()
  const {items} = useCartState()
  return (
    <div className="cart flex items-center gap-2 w-24 justify-center">
      <button type="button" onClick={handlers.toggle}>
        <span role="image">
          <Cart on={on} />
        </span>
      </button>
      <span>${mounted && calculateTotalPrice(items)}</span>
    </div>
  )
}

const Header = () => {
  const [on, handlers] = useToggle()
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
      <CartSide on={on} toFalse={handlers.toFalse} />
    </header>
  )
}

export {Header}
