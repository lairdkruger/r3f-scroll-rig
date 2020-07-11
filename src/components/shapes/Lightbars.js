import React, { useRef } from 'react'
import { Color } from 'three'
import { useThree } from 'react-three-fiber'
import Lightbar from './Lightbar'

function Lightbars(props) {
  const inner = useRef()
  const bars = useRef()

  const { viewport } = useThree()

  const height = viewport.height * 2

  const barsStore = [
    {
      id: 'bar1',
      width: viewport.width / 10,
      height: height,
      color: new Color('#F84006')
    },
    {
      id: 'bar2',
      width: viewport.width / 8,
      height: height,
      color: new Color('#E10906')
    },
    {
      id: 'bar3',
      width: viewport.width / 7,
      height: height,
      color: new Color('#BA0301')
    },
    {
      id: 'bar4',
      width: viewport.width / 4,
      height: height,
      color: new Color('#7A0707')
    },
    {
      id: 'bar5',
      width: viewport.width / 1.5,
      height: height,
      color: new Color('#450202')
    },
    {
      id: 'bar6',
      width: viewport.width / 1.3,
      height: height,
      color: new Color('#400303')
    },

    {
      id: 'bar7',
      width: viewport.width / 12,
      height: height,
      color: new Color('#F84006')
    },
    {
      id: 'bar8',
      width: viewport.width / 9,
      height: height,
      color: new Color('#E10906')
    },
    {
      id: 'bar9',
      width: viewport.width / 6,
      height: height,
      color: new Color('#BA0301')
    },
    {
      id: 'bar10',
      width: viewport.width / 3,
      height: height,
      color: new Color('#7A0707')
    },
    {
      id: 'bar11',
      width: viewport.width / 1.5,
      height: height,
      color: new Color('#450202')
    },
    {
      id: 'bar12',
      width: viewport.width / 1.3,
      height: height,
      color: new Color('#400303')
    },
    {
      id: 'bar13',
      width: viewport.width / 13,
      height: height,
      color: new Color('#FB7A29')
    },
    {
      id: 'bar14',
      width: viewport.width / 8,
      height: height,
      color: new Color('#E10906')
    },
    {
      id: 'bar15',
      width: viewport.width / 5,
      height: height,
      color: new Color('#BA0301')
    },
    {
      id: 'bar16',
      width: viewport.width / 3,
      height: height,
      color: new Color('#7A0707')
    },
    {
      id: 'bar17',
      width: viewport.width / 1.5,
      height: height,
      color: new Color('#450202')
    },
    {
      id: 'bar18',
      width: viewport.width / 1.3,
      height: height,
      color: new Color('#400303')
    }
  ]

  return (
    <group ref={bars}>
      {barsStore.map((bar, index) => (
        <Lightbar key={bar.id} bar={bar} />
      ))}
    </group>
  )
}

export default Lightbars
