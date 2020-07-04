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
  const ringSize = Math.max(3, width / 2)
  const crossSize = 0.7
  return (
    <>
      <Ring position={[-width * 0.8, height * -3, -5]} scale={[ringSize, ringSize, 1]} />
      <Cross position={[-width / 2.5, height / 8, -1]} scale={[crossSize, crossSize, 1]} rotation={[0, 0, Math.PI / 4]} />
      <Minus position={[width / 3, -height / 3.5, -2]} scale={[0.8, 0.8, 0.8]} rotation={[0, 0, Math.PI / 10]} />
      <group rotation={[Math.PI / 8, 0, 0]} position={[-width / 4, -height / 6, 0]}>
        <Box scale={[0.8, 0.8, 0.8]} />
        <Box position={[width / 1.5, height / 4, -3]} scale={[0.5, 0.5, 0.5]} />
        <FlatLighting />
      </group>
    </>
  )
}
