import React, { useState, useEffect, useRef } from "react"
import { useAppContext } from "../../provider"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas } from "react-three-fiber"
import * as THREE from "three"
import styled from "styled-components"
import { useWindowWidth } from "../../hooks"
import { yellow, pink } from "../../variables"
import HeroMarquee from "./heroMarquee"

const HomeHero = () => {
  const heroRef = useRef()
  const [rotation, setRotation] = useState([0, 0, 0])

  const { setScrollWindowHeight, model, setModel } = useAppContext()

  useEffect(() => {
    setScrollWindowHeight(heroRef.current.offsetHeight)
  }, [heroRef, setScrollWindowHeight])

  const windowWidth = useWindowWidth()

  return (
    <HeroContainer ref={heroRef}>
      <Canvas
        style={{ position: "absolute" }}
        camera={{
          position: [0, 0, 5],
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
        onPointerMove={({ clientX, clientY }) => {
          windowWidth > 768 &&
            setRotation([
              clientY / window.innerHeight / 2.5,
              clientX / window.innerWidth / 2 - 0.3,
              0,
            ])
        }}
      >
        <ambientLight intensity={1} />
        <spotLight position={[5, 10, 5]} intensity={0.8} penumbra="1" />
        <SDGFace
          rotation={rotation}
          windowWidth={windowWidth}
          model={model}
          setModel={setModel}
        />
        <fog attach="fog" args={[yellow, 5, 15]} />
      </Canvas>

      <HeroMarquee />
      <p className="scroll-cta">scroll down</p>
    </HeroContainer>
  )
}

const SDGFace = ({ rotation, windowWidth, model, setModel }) => {
  const modelRef = useRef()
  const [scale, setScale] = useState([])

  useEffect(() => {
    new GLTFLoader().load("/sdg-face.gltf", setModel)
  }, [rotation, setModel])

  useEffect(() => {
    if (windowWidth < 768) {
      setScale([
        window.innerWidth / 20,
        window.innerWidth / 20,
        window.innerWidth / 20,
      ])
    } else {
      setScale([
        window.innerWidth / 40,
        window.innerWidth / 40,
        window.innerWidth / 40,
      ])
    }
  }, [windowWidth])

  return model ? (
    <primitive
      ref={modelRef}
      object={model.scene}
      scale={scale}
      rotation={rotation}
    />
  ) : null
}

export default HomeHero

const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${yellow};

  canvas {
    top: 0;
    left: 0;
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 1;
  }

  .scroll-cta {
    position: absolute;
    /* height of the :after plus the added top px value  */
    bottom: 45px;
    right: 0;
    writing-mode: vertical-lr;
    font-weight: 700;

    &:after {
      content: "";
      position: absolute;
      top: calc(100% + 5px);
      left: calc(50% - 3px);
      width: 3px;
      height: 40px;
      background: black;
      animation: bob 2s ease-in-out infinite;
      transform-origin: top;
      background: ${pink};
    }

    @keyframes bob {
      0% {
        transform: scaleY(0);
      }
      50% {
        transform: scaleY(1);
      }
      100% {
        transform: scaleY(0);
      }
    }
  }
`
