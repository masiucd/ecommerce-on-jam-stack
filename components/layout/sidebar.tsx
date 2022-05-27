import Link from "next/link"

type Props = {
  styles?: string
}
export default function Sidebar({styles = ""}: Props): JSX.Element {
  return (
    <nav className={`border border-red-600 flex flex-col ${styles}`}>
      <input placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  )
}
