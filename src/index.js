import { render } from 'react-dom'
import React, { useState, useEffect, useRef } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { HTML } from 'drei'

import { Block } from './components/Blocks'
import HtmlContent from './components/HtmlContent'

import { Shapes } from './components/Shapes'
import Box from './components/shapes/Box'
import state from './store'
import './styles.css'

function App() {
  const [events, setEvents] = useState()
  const domContent = useRef()
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Canvas
        colorManagement
        gl={{ alpha: false, antialias: true }}
        camera={{ position: [0, 0, 4.5], fov: 50, near: 0.1, far: 100 }}
        onCreated={({ gl, events }) => {
          gl.setClearColor('white')
          gl.toneMappingExposure = 2.5
          gl.toneMappingWhitePoint = 1
          // Export canvas events, we will put them onto the scroll area
          setEvents(events)
        }}>
        <Block factor={1.5} offset={0}>
          <Shapes />
          <HtmlContent portal={domContent}>
            <div className="jumbo">
              <h1>
                r3f
                <br />
                scroll
                <br />
                rig.
              </h1>
            </div>
          </HtmlContent>
        </Block>

        <Block factor={1.5} offset={1}>
          <Box />
          <HTML center portal={domContent}>
            <h2>first section</h2>
          </HTML>
        </Block>

        <Block factor={1.5} offset={2}>
          <Box />
          <HTML center portal={domContent}>
            <h2>second section</h2>
          </HTML>
        </Block>

        <Block factor={-2} offset={4}>
          <Box scale={[2, 2, 2]} />
          <HTML center portal={domContent}>
            <h2>third section</h2>
          </HTML>
        </Block>
      </Canvas>

      <div className="scrollArea" ref={scrollArea} onScroll={onScroll} {...events}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  )
}

render(<App />, document.querySelector('#root'))
