import React from 'react'
import { useThree } from 'react-three-fiber'

import '../materials/GradientOpacityMaterial'

function TransitionPlane(props) {
  const { viewport } = useThree()

  return (
    <group {...props}>
      <mesh>
        <planeBufferGeometry attach="geometry" args={[viewport.width, viewport.height * 1.05]} />
        <gradientOpacityMaterial attach="material" uColor={props.color} toneMapped={false} transparent />
      </mesh>
    </group>
  )
}

export default TransitionPlane
