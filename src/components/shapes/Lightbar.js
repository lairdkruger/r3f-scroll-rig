import React, { useRef, useState, useEffect } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import lerp from 'lerp'

import '../materials/LightbarMaterial'

function Lightbar(props) {
  const bar = useRef()
  const material = useRef()

  const { viewport } = useThree()
  const [minWidth, maxWidth] = [-viewport.width / 1.75, viewport.width / 1.75]
  const [minInterval, maxInterval] = [1000, 5000]
  const [minOpacity, maxOpacity] = [0.0, 0.1]

  const [posX, setPosX] = useState(0)
  const [opacity, setOpacity] = useState(0)

  // returns random float between lower and upper bounds
  function random(lowerBound, upperBound) {
    return lowerBound + Math.random() * (upperBound + 1 - lowerBound)
  }

  // custom hook to make intervals work in react
  function useInterval(callback, delay) {
    const savedCallback = useRef()

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current()
      }
      if (delay !== null) {
        let id = setInterval(tick, delay)
        return () => clearInterval(id)
      }
    }, [delay])
  }

  useInterval(() => {
    setPosX(random(minWidth, maxWidth))
    setOpacity(Math.random() / 5)
  }, random(minInterval, maxInterval))

  // lerp bar to its new position
  useFrame(() => {
    bar.current.position.x = lerp(bar.current.position.x, posX, 0.01)
    material.current.uOpacity = lerp(material.current.uOpacity, opacity, 0.01)

    const velocity = Math.abs(bar.current.position.x - posX)
    material.current.uShift = velocity
  })

  return (
    <mesh ref={bar}>
      <planeBufferGeometry attach="geometry" args={[props.bar.width, props.bar.height]} />
      <lightbarMaterial ref={material} attach="material" uColor={props.bar.color} transparent={true} />
    </mesh>
  )
}

export default Lightbar
