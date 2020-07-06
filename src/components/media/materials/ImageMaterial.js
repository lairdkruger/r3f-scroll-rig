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
        uniform float scale;
        uniform float shift;
        varying vec2 vUv;
        void main() {
          vec3 pos = position;
          pos.y = pos.y + ((sin(uv.x * 3.1415926535897932384626433832795) * shift * 5.0) * 0.125);
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
        }`,

      fragmentShader: `
        uniform sampler2D image_texture;
        uniform float shift;
        uniform float scale;
        uniform vec3 color;
        uniform float opacity;
        varying vec2 vUv;
        void main() {
          float angle = 1.55;
          vec2 p = (vUv - vec2(0.5, 0.5)) * (1.0 - scale) + vec2(0.5, 0.5);
          vec2 offset = shift / 4.0 * vec2(cos(angle), sin(angle));
          vec4 cr = texture2D(image_texture, p + offset);
          vec4 cga = texture2D(image_texture, p);
          vec4 cb = texture2D(image_texture, p - offset);
          gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
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
