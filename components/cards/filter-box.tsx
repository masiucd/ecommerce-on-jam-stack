import {ChangeEvent} from "react"

import Button from "~components/elements/button"

interface Props {
  types: string[]
  selected: string | null
  setSelectedType: (type: string | null) => void
  searchByText: (e: ChangeEvent<HTMLInputElement>) => void
}
const FilterBox = ({types, selected, setSelectedType, searchByText}: Props) => (
  <div className="shadow rounded-sm flex justify-between flex-col md:flex-row px-2 ml-2 mb-5 gap-3">
    <ul className="flex p-1 flex-wrap flex-1 justify-between gap-2">
      {types.map(type => (
        <li key={type}>
          <Button
            className={`${
              selected === type ? "bg-teal-500 text-white" : ""
            } capitalize`}
            onClick={() => {
              setSelectedType(type)
            }}
          >
            <span>{type}</span>
          </Button>
        </li>
      ))}
      <li>
        <Button
          onClick={() => {
            setSelectedType(null)
          }}
        >
          <span>Clear</span>
        </Button>
      </li>
    </ul>
    <div className="flex-1">
      <div className="flex flex-col md:w-2/3 ml-auto">
        <label htmlFor="search" className="label-primary">
          Search
        </label>
        <input
          type="text"
          id="search"
          placeholder="Cool panda..."
          onChange={searchByText}
        />
      </div>
    </div>
  </div>
)

export default FilterBox
