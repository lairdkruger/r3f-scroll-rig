import React, { useState } from 'react'
import { useFrame } from 'react-three-fiber'
import useWobble from '../movement/useWobble'

function Box(props) {
  const [hovered, set] = useState(false)
  const ref = useWobble(0.5, 'cos')
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))
  return (
    <mesh ref={ref} {...props} onPointerOver={() => set(true)} onPointerOut={() => set(false)}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'white'} />
    </mesh>
  )
}

export default Box
