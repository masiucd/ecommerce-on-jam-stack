import {AnimatePresence, motion} from "framer-motion"
import Link from "next/link"
import React from "react"

type Props = {
  open: boolean
  data: WebApi[]
}
const AppDataList = ({open, data}: Props): JSX.Element => (
  <AnimatePresence>
    {open && (
      <motion.ul
        className="p-2 flex flex-col items-center justify-center h-[90%] w-full"
        initial={{opacity: 0.3, y: -100}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0.25, y: -100}}
        transition={{duration: 0.2, ease: "easeInOut"}}
      >
        {data !== null &&
          data.map(({name}) => (
            <li
              key={name}
              className="text-2xl relative capitalize mb-2 p-2 hover:text-fuchsia-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-fuchsia-400 after:w-0 after:h-1 after:hover:w-full after:transition-all after:duration-400"
            >
              <Link href={`/apps/${name}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
      </motion.ul>
    )}
  </AnimatePresence>
)

export default AppDataList
