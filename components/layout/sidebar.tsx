import dynamic from "next/dynamic"
import {useState} from "react"

import data from "../../data/d.json"
const AppDataList = dynamic(() => import("~components/lists/app-data"))

type Props = {
  styles?: string
}
export default function Sidebar({styles = ""}: Props): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
    <section className={`h-full hidden md:flex flex-col ${styles}`}>
      <div className="p-1">
        <input placeholder="Search..." />
      </div>
      <nav className="border border-red-600 flex flex-col justify-center items-center h-full">
        <button className="mb-auto mt-2" onClick={(): void => setOpen(!open)}>
          {open ? "Hide" : "View"} apps
        </button>
        {data && <AppDataList open={open} data={data} />}
      </nav>
    </section>
  )
}
