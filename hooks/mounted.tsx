import {useEffect, useState} from "react"

const useHasMounted = () => {
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(true)
  }, [])

  return state
}

export default useHasMounted
