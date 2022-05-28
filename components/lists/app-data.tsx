import {motion} from "framer-motion"
import Link from "next/link"
import React from "react"

import type {WebApi} from "~types/types"

type Props = {
  data: WebApi[]
}
const AppDataList = ({data}: Props): JSX.Element => (
  <motion.ul
    className="p-2 flex flex-col items-center justify-center h-[90%] w-full"
    initial={{opacity: 0.3, y: -100}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.2, ease: "easeInOut"}}
  >
    {data !== null &&
      data.map(({name}) => (
        <li
          key={name}
          className="text-[1.2em] relative capitalize mb-2 p-2 hover:text-blue-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-blue-400 after:w-0 after:h-1 after:hover:w-full after:transition-all after:duration-400"
        >
          <Link href={`/apps/${name}`} as={`/apps/${name}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
  </motion.ul>
)

export default AppDataList
