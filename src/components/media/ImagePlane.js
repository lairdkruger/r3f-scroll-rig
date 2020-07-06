import React, { useRef } from 'react'
import * as THREE from 'three'
import './materials/ImageMaterial'
import { useLoader, useFrame } from 'react-three-fiber'
import state from '../../store'
import lerp from 'lerp'

// A 3D plane representing an HTML image element with CSS positioning
// The image uses a custom material which allows for shader manipulation

function ImagePlane({ color = 'white', ...props }) {
  const material = useRef()
  const texture = useLoader(THREE.TextureLoader, props.src) // BREAKS IF THIS IS REMOVED???
  var images = document.getElementsByClassName('image-plane')
  images = Array.from(images) //convert to array

  const image = images.filter((el) => el.dataset.id === props.image_id)[0]

  const imageTexture = useLoader(THREE.TextureLoader, image.src)
  const imageSize = new THREE.Vector2(0, 0)
  const imageOffset = new THREE.Vector2(0, 0)

  const { width, height, top, left } = image.getBoundingClientRect()

  imageSize.set(width, height)
  imageOffset.set(left - window.innerWidth / 2 + width / 2, 0.0)

  let last = state.top.current
  useFrame(() => {
    const { top } = state
    const scrollSpeed = top.current - last
    material.current.scale = lerp(material.current.scale, Math.abs(scrollSpeed) / 150, 0.1)
    material.current.shift = lerp(material.current.shift, scrollSpeed / 150, 0.1)
    last = top.current
  })

  return (
    <mesh position={[imageOffset.x, imageOffset.y, 0]} scale={[imageSize.x, imageSize.y, 1]}>
      <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
      <customMaterial ref={material} attach="material" color={color} map={imageTexture} />
    </mesh>
  )
}

export default ImagePlane
