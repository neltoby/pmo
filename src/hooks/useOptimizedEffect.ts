import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

/**
 * useOptimizedEffect
 * Use to skip the initial call of the useEffect hook
 * @param effect
 * @param deps
 */
const useOptimizedEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const didMountRef = useRef(false)
  useEffect(() => {
    if (didMountRef.current) effect()
    else didMountRef.current = true
  }, deps)
}

export default useOptimizedEffect
