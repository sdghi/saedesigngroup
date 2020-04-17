import React, { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, useFrame, extend, useThree } from 'react-three-fiber'
import { useSpring, a } from 'react-spring/three'
import * as THREE from 'three'
import { useToggle } from '../../hooks'
import { pink, yellow, light_blue } from '../../variables'
import { HeadingTwo } from '../../elements'
import styled from 'styled-components'

const Plane = () => (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshPhysicalMaterial attach="material" color={yellow} />
    </mesh>
);

extend({ OrbitControls })

const Controls = () => {
    const { camera, gl } = useThree();
    const orbitRef = useRef();

    useFrame(() => {
        orbitRef.current.update()
    })

    return (
        <orbitControls
            autoRotate
            ref={orbitRef}
            args={[camera, gl.domElement]}
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
        />
    )
}

const Sphere = () => {

    return (
        <a.mesh castShadow>
            <sphereBufferGeometry attach="geometry" args={[2, 60, 60]} />
            <meshPhysicalMaterial attach="material" color={light_blue} />
        </a.mesh>
    )
}


const HomeHero = () => {
    return (
        <HeroContainer>
            <Canvas
                style={{ position: "absolute" }}
                camera={{
                    position: [0, 0, 5]
                }}
                onCreated={({ gl }) => {
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.PCFSoftShadowMap;
                }}
            >
                <ambientLight intensity={0.8} />
                <spotLight position={[5, 10, 5]} intensity={0.6} penumbra="1" />
                <Controls />
                <fog attach="fog" args={[yellow, 5, 15]} />
                <Plane />
                <Sphere />
            </Canvas>
            <HeadingTwo fontSize="72px" color={pink}>Delightful Design By Good People</HeadingTwo>
        </HeroContainer>
    )
}

export default HomeHero

const HeroContainer = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    ${HeadingTwo}{
        width: 90%;
        max-width: 1500px;
        margin: 0 auto;
        text-align: center;
    }

    canvas{
        top: 0;
        left: 0;
        position: absolute;
        height: 100vh;
        width: 100%;
        background: ${yellow};
        z-index: -1;
  }

`;