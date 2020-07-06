import React, { useRef } from 'react'
import * as THREE from 'three'
import './materials/ImageMaterial'
import { useLoader } from 'react-three-fiber'

// A 3D plane representing an HTML image element with CSS positioning

function ImagePlane({ color = 'white', src, ...props }) {
  const material = useRef()
  const texture = useLoader(THREE.TextureLoader, src) // BREAKS IF THIS IS REMOVED???
  const image = document.getElementsByClassName('image-plane')[0]

  const imageTexture = useLoader(THREE.TextureLoader, image.src)
  const imageSize = new THREE.Vector2(0, 0)
  const imageOffset = new THREE.Vector2(0, 0)

  const { width, height, top, left } = image.getBoundingClientRect()

  imageSize.set(width, height)
  imageOffset.set(left - window.innerWidth / 2 + width / 2, 0.0)

  return (
    <mesh position={[imageOffset.x, imageOffset.y, 0]} scale={[imageSize.x, imageSize.y, 1]}>
      <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
      <customMaterial ref={material} attach="material" color={color} map={imageTexture} />
    </mesh>
  )
}

export default ImagePlane
