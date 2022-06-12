import {useMemo, useState} from "react"

type UseToggle = [
  boolean,
  {
    toggle: () => void
    toTrue: () => void
    toFalse: () => void
    reset: () => void
  }
]

const useToggle = (initialState = false): UseToggle => {
  const [state, setState] = useState(initialState)
  const handlers = useMemo(
    () => ({
      toggle: () => setState(prev => !prev),
      toTrue: () => setState(true),
      toFalse: () => setState(false),
      reset: () => {
        setState(initialState)
      },
    }),
    [initialState]
  )
  return [state, handlers]
}

export default useToggle
