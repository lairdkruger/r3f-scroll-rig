import { ShaderMaterial, Color } from 'three'
import { extend } from 'react-three-fiber'

class GradientOpacityMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        uColor: { value: new Color('#000000') }
      },

      vertexShader: `
        varying vec2 vUv;
        void main() {
          vec3 pos = position;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
        }`,

      fragmentShader: `
        uniform vec3 uColor;
        varying vec2 vUv;

        void main() {
          float x = vUv.x;
          float y = vUv.y;

          float opacity = 1.0-y;

          gl_FragColor = vec4(uColor.rgb, opacity);
        }`
    })
  }

  set uColor(value) {
    this.uniforms.uColor.value = value
  }

  get uColor() {
    return this.uniforms.uColor.value
  }
}

extend({ GradientOpacityMaterial })
