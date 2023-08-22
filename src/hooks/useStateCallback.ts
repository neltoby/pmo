import { useState, useCallback, useRef, useEffect } from 'react'

/**
 * useStateCallback hook
 * Use this to emulate the setState(state, callback) behaviour
 * @param inputState
 */
const useStateCallback = <S>(inputState: S | (() => S)) => {
  const [state, setState] = useState<S>(inputState)
  const callbackRef = useRef(null)

  const setStateCallback = useCallback<any>((state: S | (() => S), cb: Function) => {
    callbackRef.current = cb
    setState(state)
  }, [])

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(state)
      callbackRef.current = null
    }
  }, [state])

  return [state, setStateCallback]
}

export default useStateCallback
