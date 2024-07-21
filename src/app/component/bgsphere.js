// src/components/StarSphere.js
import { OrbitControls, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const StarSphere = () => {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 100;
        ref.current.rotation.y -= delta / 100;
    })

    return (
        <>
            <mesh ref={ref}>
                <OrbitControls />
                <Stars />
            </mesh>
        </>
    );
}

export default StarSphere;
