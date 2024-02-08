"use client";

import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, TransformControls, useCursor } from '@react-three/drei'

function Box (props) {
  const ref = useRef()

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((state,delta) => (ref.current.rotation.x += delta))

  return (
    <mesh      
      {...props}
      ref={ref}
      rotation={[Math.PI / 2, 0, 0]}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    > 
      <sphereGeometry args={[15,32,16]} />
      <meshStandardMaterial color={ props.color } transparent={true}/>    
    </mesh>
  )
}

export default function Background(props) {

  const meshes = [];
  const colors = ["#F67280", "#C06C84", "#6C5B7B", "#355C7D"];
  for(var i=0; i < 300; i++){
    meshes.push(<Box position={[(Math.random() - 0.5)* 1000,(Math.random() -0.5)* 1000,(Math.random() -0.5)* 1000]} color={colors[i%3]}/>);
  }
  return (
    <Canvas {...props}>
      <OrbitControls 
        enableRotate={true}
        autoRotate={1}
        autoRotateSpeed={0.1}
      />
      <color attach="background" args={['#000']} />
      <directionalLight color="#fff" intensity={0.9} position={[-20,0,30]} />
      {meshes}
    </Canvas>
  )
}