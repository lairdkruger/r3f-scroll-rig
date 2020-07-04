import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

// Hook that creates periodic movement

function useWobble(factor = 1, fn = 'sin', cb) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.position.y = Math[fn](t) * factor
    if (cb) cb(t, ref.current)
  })
  return ref
}

export default useWobble
