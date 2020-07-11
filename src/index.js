import { render } from 'react-dom'
import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'

import { Block } from './components/Blocks'
import HtmlContent from './components/HtmlContent'

import state from './store'
import './styles.css'
import FlatLighting from './components/lighting/FlatLighting'
import Postprocessing from './components/postprocessing/Postprocessing'

import { Shapes } from './components/Shapes'
import Box from './components/shapes/Box'
import Storm from './components/shapes/Storm'
import Bars from './components/shapes/Lightbars'
import ImagePlane from './components/media/ImagePlane'
import TransitionPlane from './components/shapes/TransitionPlane'
import BackgroundPlane from './components/shapes/BackgroundPlane'

function App() {
  const [events, setEvents] = useState()
  const domContent = useRef()
  const scrollArea = useRef()
  // Scroll an area by updating state.top.current
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  // Flatten default camera
  const perspective = 800
  const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI

  return (
    <>
      <Canvas
        gl={{ alpha: true, powerPreference: 'high-performance', antialias: false, stencil: false, depth: false }}
        onCreated={({ gl, events }) => {
          // Export canvas events, we will put them onto the scroll area (hovers, clicks etc)
          setEvents(events)
        }}
        camera={{ position: [0, 0, perspective], fov: fov }}>
        <FlatLighting />

        <Block factor={0.0} offset={0}>
          <Bars position={[0, 0, -1]} />
          <HtmlContent portal={domContent}>
            <div className="jumbo">
              <h1>inst.19-20</h1>
            </div>
          </HtmlContent>
        </Block>

        <Block factor={1.0} offset={1}>
          <TransitionPlane color="#000000" />
          <HtmlContent portal={domContent} className="section-box"></HtmlContent>
        </Block>

        <Block factor={1.0} offset={2}>
          <BackgroundPlane BackgroundColor="#000000" />
          <HtmlContent portal={domContent} className="section-box"></HtmlContent>
        </Block>

        <Block factor={1.0} offset={3}>
          <Storm />

          <HtmlContent portal={domContent} className="section-box">
            <div className="image-box">
              <img data-id="1" className="image-plane" src="media/images/ShaderPlane.png" alt="melon" />
            </div>
          </HtmlContent>
        </Block>

        <Block factor={1.0} offset={4}>
          <HtmlContent portal={domContent} className="section-box">
            <h1>
              r3f
              <br />
              scroll
              <br />
              rig.
            </h1>
            <div className="image-box">
              <img data-id="1" className="image-plane" src="media/images/ShaderPlane.png" alt="melon" />
            </div>
          </HtmlContent>
          <Suspense
            fallback={
              <HtmlContent>
                <h1>Loading Image</h1>
              </HtmlContent>
            }>
            <ImagePlane color="#bfe2ca" src="media/images/ShaderPlane.png" image_id="1" />
          </Suspense>
        </Block>

        <Suspense fallback={null}>
          <Postprocessing />
        </Suspense>
      </Canvas>

      {/* container with events */}
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll} {...events}>
        {/* content container containing all html elements */}
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        {/* sizer for the scroll area */}
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  )
}

render(<App />, document.querySelector('#root'))
