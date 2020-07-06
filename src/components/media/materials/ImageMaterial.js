import { ShaderMaterial, Color } from 'three'
import { extend } from 'react-three-fiber'

class CustomMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        opacity: { value: 1 },
        color: { value: new Color('white') },
        image_texture: { value: null },
        scale: { value: 0 },
        shift: { value: 0 }
      },

      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.);
        }`,

      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        uniform sampler2D image_texture;
        varying vec2 vUv;
        void main() {
          /* gl_FragColor = vec4(color, opacity); */
          gl_FragColor = texture2D(image_texture, vUv);
        }`
    })
  }

  get color() {
    return this.uniforms.color.value
  }

  get opacity() {
    return this.uniforms.opacity.value
  }

  set opacity(value) {
    if (this.uniforms) this.uniforms.opacity.value = value
  }

  set map(value) {
    this.uniforms.image_texture.value = value
  }

  get map() {
    return this.uniforms.image_texture.value
  }

  set scale(value) {
    this.uniforms.scale.value = value
  }

  get scale() {
    return this.uniforms.scale.value
  }

  set shift(value) {
    this.uniforms.shift.value = value
  }

  get shift() {
    return this.uniforms.shift.value
  }
}

extend({ CustomMaterial })
