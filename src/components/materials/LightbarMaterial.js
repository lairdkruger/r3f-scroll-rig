import { ShaderMaterial, Color } from 'three'
import { extend } from 'react-three-fiber'

class LightbarMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uColor: { value: new Color('#000000') },
        uOpacity: { value: 0.0 },
        uTime: { value: 0.0 },
        uShift: { value: 0.0 }
      },

      vertexShader: `
        uniform float uShift;
        varying vec2 vUv;
        void main() {
          vec3 pos = position;
          pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * uShift * 5.0) * 0.125);
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
        }`,

      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform float uTime;
        uniform float uShift;
        varying vec2 vUv;
        void main() {
          
          gl_FragColor = vec4(uColor.rgb, uOpacity);
        }`
    })
  }

  set uColor(value) {
    this.uniforms.uColor.value = value
  }

  get uColor() {
    return this.uniforms.uColor.value
  }

  set uOpacity(value) {
    this.uniforms.uOpacity.value = value
  }

  get uOpacity() {
    return this.uniforms.uOpacity.value
  }

  set uTime(value) {
    this.uniforms.time.value = value
  }

  get uTime() {
    return this.uniforms.time.value
  }
  set uShift(value) {
    this.uniforms.uShift.value = value
  }

  get uShift() {
    return this.uniforms.uShift.value
  }
}

extend({ LightbarMaterial })
