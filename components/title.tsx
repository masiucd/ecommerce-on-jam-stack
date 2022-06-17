import React from "react"

interface Props {
  title?: string
  className?: string
  children?: React.ReactNode
}
const Title = ({title, className, children}: Props) => {
  return children ? (
    <aside className={`text-2xl md:text-4xl mb-5 ${className}`}>
      {children}
    </aside>
  ) : (
    <h1 className={className}>{title}</h1>
  )
}

export default Title
