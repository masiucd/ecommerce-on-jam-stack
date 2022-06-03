import Image from "next/image"
import Link from "next/link"

import Cart from "~components/icons/cart"
type CardProps = {
  card: Card
}
const Card = ({card}: CardProps) => {
  const {name, image, cardSlug, price} = card
  return (
    <div className="min-w-[15rem] min-h-[15rem] shadow-md">
      <div className="border-2 border-slate-500 rounded-md shadow-md relative group mix-blend-multiply bg-blue-400 w-full h-full transition-all ">
        <div className="relative w-full h-full ">
          <Image
            src={`/images/${image}.jpeg`}
            alt="Picture of the author"
            // width={500}
            // height={440}
            priority
            layout="fill"
          />
        </div>
        <div className="overlay absolute top-0 left-0 bg-slate-800 w-full h-full opacity-40"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-xl text-white opacity-0 group-hover:opacity-100 group-hover:top-1/2  transition-all ease-in-out">
          <div className="flex flex-col p-1 items-center justify-center">
            <p>{name}</p>
            <p>{price} $</p>
            <p className="hover:text-blue-200 mb-3">
              <Link href={`/cards/${cardSlug}`}>
                <a>More</a>
              </Link>
            </p>
            <button className="flex border-4 rounded-md border-slate-600 hover:border-blue-400 px-2 items-center">
              Add to
              <span role="image" className="ml-1">
                <Cart />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export {Card}
