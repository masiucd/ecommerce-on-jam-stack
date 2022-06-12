import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import Cart from "~components/icons/cart"

type CardProps = {
  card: Card
  addToCart: () => void
}
const Card = ({card, addToCart}: CardProps) => {
  return (
    <motion.div
      role="grid-cell"
      className="shadow-md"
      whileHover={{scale: 1.05, transition: {duration: 0.45}}}
    >
      <div className="border-2 border-slate-500 rounded-md shadow-md relative group transition-all">
        <CardImage image={card.image} />
        <ActionText card={card} addToCart={addToCart} />
        <div className="absolute bottom-0 left-0 transform  text-white opacity-0 group-hover:opacity-90  transition-all ease-in-out duration-700	 w-0 h-0 group-hover:h-3/4 group-hover:w-full bg-blue-400 " />
      </div>
    </motion.div>
  )
}

interface CardImageProps {
  image: string
}
const CardImage = ({image}: CardImageProps) => (
  <div className="relative after:content-[''] after:w-full after:h-full after:bg-slate-800 after:absolute after:left-0 after:top-0 after:opacity-30">
    <Image
      src={`/images/${image}.jpg`}
      alt={`Picture of for image ${image}`}
      layout="responsive"
      width={500}
      height={500}
      quality={100}
      placeholder="empty"
      objectFit="cover"
    />
  </div>
)

const ActionText = ({card, addToCart}: CardProps) => {
  const {name, price, cardSlug} = card
  return (
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-xl  opacity-0 group-hover:opacity-100 group-hover:top-1/2  transition-all duration-[800ms] ease-in-out w-full z-10 text-slate-900">
      <div className="flex flex-col p-1 items-center justify-center w-full">
        <Link href={`/cards/${cardSlug}`}>
          <motion.a
            className="hover:text-blue-200 mb-1 cursor-pointer"
            whileHover={{
              scale: 1.1,
            }}
          >
            {name}
          </motion.a>
        </Link>
        <p>{price} $</p>

        <button
          onClick={() => {
            addToCart()
          }}
          className="flex gap-1 min-h-[2rem] border-2 rounded-md border-slate-600 hover:border-slate-50 px-2 items-center justify-center"
        >
          <span className="text-[1rem]">Add to</span>
          <span role="image">
            <Cart width={17} height={17} />
          </span>
        </button>
      </div>
    </div>
  )
}

export {Card}
