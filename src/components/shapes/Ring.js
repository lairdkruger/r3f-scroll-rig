import React from 'react'

function Ring(props) {
  return (
    <mesh {...props}>
      <ringBufferGeometry attach="geometry" args={[1, 1.4, 64]} />
      <meshBasicMaterial attach="material" color="#FFF9BE" transparent opacity={1} toneMapped={false} />
    </mesh>
  )
}

export default Ring
