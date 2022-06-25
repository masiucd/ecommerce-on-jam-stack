import {RefObject, useEffect} from "react"

type HandlerEvent = MouseEvent | TouchEvent

const useClickAway = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const listener = (event: HandlerEvent): void => {
      const element = ref?.current

      if (!element || element.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchcancel", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchcancel", listener)
    }
  }, [handler, ref])
}

export {useClickAway}
