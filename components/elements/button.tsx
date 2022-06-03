import Link from "next/link"
import {FC, ReactElement} from "react"

type Props = {
  children: ReactElement
  href?: string
}

const Button: FC<Props> = ({children, href = null}) => {
  if (href !== null) {
    return (
      <Link href={href}>
        <a
          className={`border-2 border-blue-400 p-1 rounded-md shadow-sm hover:bg-blue-400 hover:border-slate-600 block`}
        >
          {children}
        </a>
      </Link>
    )
  }
  return (
    <button
      className={`border-2 border-blue-400 p-1 rounded-md shadow-sm hover:bg-blue-400 hover:border-slate-600`}
    >
      {children}
    </button>
  )
}

export default Button
