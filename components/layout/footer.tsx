import {LayoutTitle} from "./layout-title"

const Footer = () => {
  const date = new Date()
  return (
    <footer className="h-[10vh] shadow-md bg-slate-800 flex items-center text-slate-100">
      <div className="w-[90%] md:w-[80%] m-auto py-2 flex flex-col items-center justify-center ">
        <LayoutTitle styles="pb-1" />
        <small>&copy; Masiu&apos;s Sick images {date.getFullYear()} </small>
      </div>
    </footer>
  )
}

export {Footer}
