import React from 'react'
import useWobble from '../movement/useWobble'

function Minus(props) {
  const ref = useWobble(10, 'sin')
  return (
    <group ref={ref}>
      <group {...props}>
        <mesh>
          <planeBufferGeometry attach="geometry" args={[2, 0.7]} />
          <meshBasicMaterial attach="material" color="#DEF5FF" toneMapped={false} transparent opacity={0.7} />
        </mesh>
      </group>
    </group>
  )
}

export default Minus
