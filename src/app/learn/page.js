'use client'
import { Canvas } from "@react-three/fiber";
import { SphereGeometry } from "three";
import Cube from "../component/cube";
import Sphere from "../component/sphere";
import Donut from "../component/donut";
import Knot from "../component/torusknot";
import Globe from "../component/globe";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

const Learn = () => {


    const containerStyle = {
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory'
    };

    const sectionStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '600',
        fontSize: '3xl',
        scrollSnapAlign: 'start'
    };

    return (
        <div style={containerStyle}>
            <section style={{ ...sectionStyle }} className="bg-white text-black">

                <Canvas className="bg-blue-300">
                    <directionalLight position={[0, 0, 2]} intensity={0.5} />
                    <ambientLight intensity={1} />
                    <Sphere />
                </Canvas >

            </section>

            <section style={{ ...sectionStyle }} className="bg-white text-black">

                <Canvas className="bg-blue-300">
                    <directionalLight position={[0, 0, 2]} intensity={0.5} />
                    <ambientLight intensity={1} />
                    <Globe position={[0, 0, 0]} args={[1, 32, 32]} color={"orange"} />
                </Canvas >

            </section>
            <section style={{ ...sectionStyle, backgroundColor: '#60a5fa', color: 'black' }}>
                <Canvas>

                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <octahedronGeometry />

                    </mesh>
                </Canvas >
            </section>

            <section style={{ ...sectionStyle }} className="bg-white text-black">

                <Canvas className="bg-blue-300">
                    <directionalLight position={[0, 0, 2]} intensity={0.5} />
                    <ambientLight intensity={1} />
                    <Donut position={[-3, 0, 0]} args={[1, 1, 30]} color={"red"} />
                </Canvas >

            </section>
            <section style={{ ...sectionStyle }} className="bg-white text-black">

                <Canvas className="bg-blue-300">
                    <directionalLight position={[0, 0, 2]} intensity={0.5} />
                    <ambientLight intensity={1} />
                    <Knot position={[0, 0, 0]} args={[1, 30, 30]} color={"orange"} />
                    <OrbitControls enableZoom={false} />
                </Canvas >

            </section>
            <section style={{ ...sectionStyle, backgroundColor: '#34d399', color: 'black' }}>
                <Canvas>
                    <directionalLight position={[0, 0, 2]} intensity={0.5} />
                    <ambientLight intensity={1} />
                    <Cube position={[2, 0, 0]} size={[1, 1, 1]} color={"red"} />

                    <group position={[0, 0, 0]}>
                        <Cube position={[2, 0, 0]} size={[1, 1, 1]} color={"red"} />
                        <Cube position={[-2, 0, 0]} size={[1, 1, 1]} color={"yellow"} />
                        <Cube position={[0, 2, 0]} size={[1, 1, 1]} color={"blue"} />
                        <Cube position={[0, -2, 0]} size={[1, 1, 1]} color={"hotpink"} />

                    </group>


                </Canvas >
            </section>
        </div>
    );
}

export default Learn;
