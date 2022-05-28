import dynamic from "next/dynamic"
import {useState} from "react"
import useSWR from "swr"
const AppDataList = dynamic(() => import("~components/lists/app-data"))

const fetcher = (url: string): Promise<WebApi[]> =>
  fetch(url).then(res => res.json())

type Props = {
  styles?: string
}
export default function Sidebar({styles = ""}: Props): JSX.Element {
  const [open, setOpen] = useState(false)
  const {data, error} = useSWR("api/web-apis", fetcher)
  if (!data) return <h3>Loading...</h3>
  if (error) {
    return <h3> Error...</h3>
  }

  return (
    <section className="border border-red-500 h-full flex flex-col">
      <div className="p-1">
        <input placeholder="Search..." />
      </div>
      <nav
        className={`border border-red-600 flex flex-col justify-center items-center ${styles}`}
      >
        <button className="mb-auto mt-2" onClick={(): void => setOpen(!open)}>
          View apps
        </button>
        {data && <AppDataList open={open} data={data} />}
      </nav>
    </section>
  )
}
