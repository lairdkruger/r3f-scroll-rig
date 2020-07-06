import React from 'react'
import { useThree } from 'react-three-fiber'

import Box from './shapes/Box'
import Ring from './shapes/Ring'
import Cross from './shapes/Cross'
import Minus from './shapes/Minus'

import FlatLighting from './lighting/FlatLighting'

export function Shapes() {
  const {
    viewport: { width, height }
  } = useThree()
  const ringSize = width / 4
  const crossSize = width / 4
  const minusSize = width / 6
  const boxSize = width / 8
  return (
    <>
      <Ring position={[-width * 0.5, height * -3, -5]} scale={[ringSize, ringSize, 1]} />
      <Cross position={[-width / 2.5, height / 8, -1]} scale={[crossSize, crossSize, 1]} rotation={[0, 0, Math.PI / 4]} />
      <Minus position={[width / 3, -height / 3.5, -2]} scale={[minusSize, minusSize, 1]} rotation={[0, 0, Math.PI / 10]} />
      <group rotation={[Math.PI / 8, 0, 0]} position={[-width / 4, -height / 6, 0]}>
        <Box position={[width / 10, height / 2, 40]} scale={[boxSize, boxSize, boxSize]} />
        <Box position={[width / 2, height / 2, 20]} scale={[boxSize / 1.5, boxSize / 1.5, boxSize / 1.5]} />
        <FlatLighting />
      </group>
    </>
  )
}
