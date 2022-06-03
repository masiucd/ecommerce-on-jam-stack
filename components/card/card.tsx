import Image from "next/image"
import Link from "next/link"
import Cart from "~components/icons/cart"
type CardProps = {
  card: Card
}
const Card = ({card}: CardProps) => {
  const {name, image, cardSlug, price} = card
  return (
    <div className="min-w-[6rem] min-h-[6rem] shadow-md">
      <div className="border-2 border-slate-500 rounded-md shadow-md relative group mix-blend-multiply bg-blue-400">
        <div className="relative">
          <Image
            src={`/images/${image}.jpeg`}
            alt="Picture of the author"
            width={500}
            height={440}
            priority
          />
        </div>
        <div className="overlay absolute top-0 left-0 bg-slate-800 w-full h-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-xl text-white hidden group-hover:flex transition-all ease-in-out">
          <div className="flex flex-col p-1 items-center justify-center">
            <p>{name}</p>
            <p>{price} $</p>
            <p className="hover:text-blue-500">
              <Link href={`/cards/${cardSlug}`}>
                <a>More</a>
              </Link>
            </p>
            <button className="flex border-2 rounded-md border-slate-600 hover:border-blue-600 px-2 items-center">
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
