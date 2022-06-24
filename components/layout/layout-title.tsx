import Link from "next/link"

interface LayoutTitleProps {
  styles?: string
}
const LayoutTitle = ({styles = ""}: LayoutTitleProps) => (
  <Link href="/">
    <a
      className={`text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-teal-500 block hover:scale-105 transition-all ease-out ${styles}`}
    >
      Masiu&apos;s Sick images
    </a>
  </Link>
)

export {LayoutTitle}
