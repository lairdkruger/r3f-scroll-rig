import React, { useRef } from 'react'
import useWobble from '../movement/useWobble'

function Cross(props) {
  const inner = useRef()
  const ref = useWobble(0.1, 'sin', () => (inner.current.rotation.z += 0.001))
  return (
    <group ref={ref}>
      <group ref={inner} {...props}>
        <mesh>
          <planeBufferGeometry attach="geometry" args={[2, 0.5]} />
          <meshBasicMaterial attach="material" color="#FFEDDD" toneMapped={false} />
        </mesh>
        <mesh position={[0, -0.625, 0]}>
          <planeBufferGeometry attach="geometry" args={[0.5, 0.75]} />
          <meshBasicMaterial attach="material" color="#FFEDDD" toneMapped={false} />
        </mesh>
        <mesh position={[0, 0.625, 0]}>
          <planeBufferGeometry attach="geometry" args={[0.5, 0.75]} />
          <meshBasicMaterial attach="material" color="#FFEDDD" toneMapped={false} />
        </mesh>
      </group>
    </group>
  )
}

export default Cross
