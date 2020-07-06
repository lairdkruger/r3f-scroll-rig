import React from 'react'
import { useThree } from 'react-three-fiber'
import { HTML } from 'drei'

// drei component tying html elements to any object in a scene
// portal: target container

function HtmlContent({ className, style, children, portal }) {
  const { size } = useThree()
  return (
    <HTML
      portal={portal}
      style={{
        position: 'absolute',
        top: -size.height / 2,
        left: -size.width / 2,
        width: size.width,
        height: size.height
      }}>
      <div className={className} style={style}>
        {children}
      </div>
    </HTML>
  )
}

export default HtmlContent
