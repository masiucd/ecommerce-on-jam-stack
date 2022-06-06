import {FC} from "react"

interface GridProps {
  children: React.ReactNode
  className?: string
}
const Grid: FC<GridProps> = ({children, className}) => {
  return (
    <section
      className={`grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3 mb-4 ${className}`}
    >
      {children}
    </section>
  )
}

export {Grid}
