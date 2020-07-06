import React from 'react'
import { PerspectiveCamera } from 'drei'

// A standard camera adjusted so that 1 unit == 1 px
// Use to make 3D planes appear as 2D HTML images

function FlatCamera() {
  const perspective = 800
  const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI

  return (
    <PerspectiveCamera
      makeDefault // Registers it as the default camera system-wide (default=false)
      position={[0, 0, perspective]}
      fov={fov} // All THREE.PerspectiveCamera props are valid
      aspect={window.innerWidth / window.innerHeight}
      near={1}
      far={1000}></PerspectiveCamera>
  )
}

export default FlatCamera
