/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Digital_MHC (https://sketchfab.com/Digital_MHC)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/nicola-sofa-44ed972d6f5a400abe0b2144b46d4496
title: Nicola Sofa
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/divan/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={nodes.Object_2.material} />
        <mesh geometry={nodes.Object_3.geometry} material={nodes.Object_3.material} />
        <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
        <mesh geometry={nodes.Object_5.geometry} material={nodes.Object_5.material} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.nikel_legs} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Pillows} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
