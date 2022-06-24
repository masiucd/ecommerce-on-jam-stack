import {
  calculateTotalPrice,
  calculateTotalPriceForItem,
  useCartDispatch,
  useCartState,
} from "context/cart/cart-provider"
import {AnimatePresence, motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import Button from "~components/elements/button"
import Cart from "~components/icons/cart"
import navItems from "~data/nav-items.json"
import useHasMounted from "~hooks/mounted"
import useToggle, {UseToggle} from "~hooks/toggle"

import {LayoutTitle} from "./layout-title"

const HighLighter = ({text}: {text: string}) => (
  <span className="font-bold inline-block relative after:content-[''] after:absolute after:w-full after:h-2 after:bg-teal-500 after:left-0 after:bottom-0 after:-z-index-10 after:opacity-50 ">
    {text}
  </span>
)

interface CartBoxProps {
  on: boolean
  handlers: UseToggle[1]
}

const CartBox = ({on, handlers}: CartBoxProps) => {
  const mounted = useHasMounted()
  const {items} = useCartState()
  return (
    <div className="cart flex items-center gap-2 min-w-[7rem] justify-center">
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
            initial={{x: "100%"}}
            animate={{x: 0}}
            exit={{x: "100%"}}
            transition={{duration: 0.25, ease: "easeOut"}}
            className={`fixed top-0 right-0 h-full w-full  z-10 text-slate-900 ${
              on ? "bg-slate-900/50" : null
            }`}
          >
            <div className="ml-auto bg-slate-50 w-full md:w-[40rem] h-full z-20 opacity-100">
              <div className="border border-red-500 flex items-center p-2">
                <h3 className="text-3xl">Your cart</h3>
                <button
                  type="button"
                  onClick={handlers.toFalse}
                  className="text-slate-900 z-30 text-2xl p-1 ml-auto hover:text-teal-500"
                >
                  <span role="image flex">❌</span>
                </button>
              </div>
              <CartItemsList items={items} />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}

const CartItemsList = ({items}: {items: Array<Card>}) => {
  const dispatch = useCartDispatch()
  return (
    <ul className="p-2">
      {items.length > 0
        ? items.map(item => (
            <li
              key={item.id}
              className="flex gap-2  mb-5 shadow-sm items-center "
            >
              <div className="flex rounded-xl ">
                <Image
                  src={`/images/${item.image}.jpg`}
                  alt={`Picture of for image ${item.image}`}
                  width={150}
                  height={150}
                  quality={100}
                  style={{borderRadius: 4}}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  card: <HighLighter text={item.name} />
                </p>
                <p>
                  quantity: <HighLighter text={item.quantity.toString()} />
                </p>
                <p>
                  price/item: <HighLighter text={`${item.price}$`} />
                </p>
                <p>
                  total: <HighLighter text={calculateTotalPriceForItem(item)} />
                </p>
              </div>
              <div className=" ml-auto mt-auto ">
                <Button
                  className=""
                  type="button"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      id: item.id,
                    })
                  }}
                >
                  <span>Remove</span>
                </Button>
              </div>
            </li>
          ))
        : null}
    </ul>
  )
}

export {Header}
