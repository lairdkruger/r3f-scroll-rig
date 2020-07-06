import { render } from 'react-dom'
import React, { useState, useEffect, useRef, Suspense } from 'react'
import { Canvas } from 'react-three-fiber'

import { Block } from './components/Blocks'
import HtmlContent from './components/HtmlContent'

import { Shapes } from './components/Shapes'
import Box from './components/shapes/Box'
import state from './store'
import './styles.css'
import FlatCamera from './components/camera/FlatCamera'
import ImagePlane from './components/media/ImagePlane'

function App() {
  const [events, setEvents] = useState()
  const domContent = useRef()
  const scrollArea = useRef()
  // Scroll an area by updating state.top.current
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <>
      <Canvas
        colorManagement
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl, events }) => {
          gl.setClearColor('white')
          // Export canvas events, we will put them onto the scroll area (hovers, clicks etc)
          setEvents(events)
        }}>
        <FlatCamera />

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
          <HtmlContent portal={domContent} className="section-box">
            <h2 className="header-white">first section</h2>
            <div className="image-box">
              <img data-id="1" className="image-plane" src="media/images/melon.jpg" alt="melon" />
            </div>
          </HtmlContent>
          <Suspense
            fallback={
              <HtmlContent>
                <h1>Loading Image</h1>
              </HtmlContent>
            }>
            <ImagePlane color="#bfe2ca" src="media/images/melon.jpg" image_id="1" />
          </Suspense>
        </Block>

        <Block factor={1.5} offset={2}>
          <Box scale={[200, 200, 200]} />
          <HtmlContent portal={domContent} className="section-box">
            <h2>second section</h2>
          </HtmlContent>
        </Block>

        <Block factor={-2} offset={4}>
          <Box scale={[400, 400, 400]} />
          <HtmlContent portal={domContent} className="section-box">
            <h2>third section</h2>
          </HtmlContent>
        </Block>
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
