import React from 'react'

function FlatLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[70, -50, 200]} intensity={1} angle={0.3} penumbra={1} />
      <pointLight position={[1, -1, -5]} intensity={0.5} />
    </>
  )
}

export default FlatLighting
