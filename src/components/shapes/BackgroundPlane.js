import React from 'react'
import { useThree } from 'react-three-fiber'

function BackgroundPlane(props) {
  const { viewport } = useThree()

  console.log(props)

  return (
    <mesh position={[0, 0, 5]}>
      <planeBufferGeometry attach="geometry" args={[viewport.width, viewport.height]} />
      <meshBasicMaterial attach="material" color="#000000" toneMapped={false} />
    </mesh>
  )
}

export default BackgroundPlane
