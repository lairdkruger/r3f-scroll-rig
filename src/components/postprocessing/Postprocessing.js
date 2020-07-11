import { useMemo, useEffect } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import { EffectComposer, EffectPass, NoiseEffect, RenderPass, BloomEffect, KernalSize } from 'postprocessing'

export default function Postprocessing() {
  const { gl, scene, camera, size } = useThree()

  const composer = useMemo(() => {
    const composer = new EffectComposer(gl)
    composer.addPass(new RenderPass(scene, camera))

    const bloomEffect = new BloomEffect({ luminanceThreshold: 0.0, intensity: 2.0, luminanceSmoothing: 0.0025 })

    const noiseEffect = new NoiseEffect({ premultiply: true })

    const effectPass = new EffectPass(camera, bloomEffect, noiseEffect)
    effectPass.renderToScreen = true
    composer.addPass(effectPass)

    return composer
  }, [])

  useEffect(() => void composer.setSize(size.width, size.height), [size])

  return useFrame((_, delta) => composer.render(delta), 1)
}
