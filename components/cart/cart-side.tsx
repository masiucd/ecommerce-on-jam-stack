import {
  calculateTotalPriceForItem,
  useCartDispatch,
  useCartState,
} from "context/cart/cart-provider"
import {AnimatePresence, motion} from "framer-motion"
import Image from "next/image"
import {useRef} from "react"

import Button from "~components/elements/button"
import {useClickAway} from "~hooks/click-away"

interface Props {
  on: boolean
  toFalse: () => void
}
const CartSide = ({on, toFalse}: Props) => {
  const {items} = useCartState()
  const ref = useRef(null)
  useClickAway(ref, toFalse)

  return (
    <AnimatePresence>
      {on && (
        <aside
          className={`fixed top-0 right-0 h-full w-full  z-10 text-slate-900 ${
            on ? "bg-slate-900/50" : null
          }`}
        >
          <motion.div
            ref={ref}
            initial={{x: "100%"}}
            animate={{x: 0}}
            exit={{x: "100%"}}
            transition={{
              duration: 0.15,

              damping: 20,
              type: "spring",
            }}
            className="ml-auto bg-slate-50 w-full md:w-[40rem] h-full z-20 opacity-100 flex flex-col"
          >
            <div className="shadow flex items-center p-2 bg-slate-100">
              <h3 className="text-3xl">Your cart</h3>
              <button
                type="button"
                onClick={toFalse}
                className="text-slate-900 z-30 text-2xl p-1 ml-auto hover:text-teal-500"
              >
                <span role="image flex">❌</span>
              </button>
            </div>
            <CartItemsList items={items} />
            <div className="cart-footer mt-auto p-2 shadow-md bg-slate-100 ">
              <div className="flex justify-end gap-3">
                <Button>
                  <span>Clear cart</span>
                </Button>
                <Button className="mr-2">
                  <span>Checkout</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </aside>
      )}
    </AnimatePresence>
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

const HighLighter = ({text}: {text: string}) => (
  <span className="font-bold inline-block relative after:content-[''] after:absolute after:w-full after:h-2 after:bg-teal-500 after:left-0 after:bottom-0 after:-z-index-10 after:opacity-50 ">
    {text}
  </span>
)

export default CartSide
