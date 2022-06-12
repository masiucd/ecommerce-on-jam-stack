import React from "react"

interface Props {
  children: React.ReactNode
}

const Highlighted = ({children}: Props) => (
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-violet-500 inline-block">
    {children}
  </span>
)

export default Highlighted
