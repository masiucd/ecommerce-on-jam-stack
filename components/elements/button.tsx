import Link from "next/link"
import {FC, ReactElement} from "react"

type Props = {
  children: ReactElement
  href?: string
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void | undefined
  disabled?: boolean
}

const Button: FC<Props> = ({
  children,
  href = null,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}) => {
  if (href !== null) {
    return (
      <Link href={href}>
        <a
          className={`border-2 border-teal-400 p-1 rounded-md shadow-sm hover:bg-teal-400 hover:border-slate-600 block ${className}`}
        >
          {children}
        </a>
      </Link>
    )
  }
  return (
    <button
      type={type}
      disabled={disabled}
      className={`border-2 border-teal-400 p-1 rounded-md shadow-sm hover:bg-teal-400 hover:border-slate-600 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
