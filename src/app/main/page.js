'use client'
import { Canvas } from "@react-three/fiber";
import Globe from "../component/globe";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";

const Main = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY / window.innerHeight;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const containerStyle = {
        height: '300vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        position: 'relative',
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
            <section style={{ ...sectionStyle }} className="bg-cyan-300 text-black">
                <div className="flex flex-col gap-5 text-left justify-center w-[50%] h-[100vh] ml-10">
                    <h1 className="text-5xl">This is sphere</h1>
                    <p className="text-base">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                </div>
                <div className="w-[50%] h-[100vh]">
                    <Canvas>
                        <directionalLight position={[0, 0, 2]} intensity={0.5} />
                        <ambientLight intensity={1} />
                        <Globe position={[0, 0, 0]} size={[1, 32, 32]} color={"orange"} scrollPosition={scrollPosition} />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>
            </section>
            <section style={{ ...sectionStyle }} className="bg-cyan-300 text-black">
                <div className="w-[100%] h-[100vh] absolute">
                    <Canvas>
                        <directionalLight position={[0, 0, 2]} intensity={0.5} />
                        <ambientLight intensity={1} />
                        <Globe position={[-15, 0, 0]} size={[1, 32, 32]} color={"orange"} scrollPosition={scrollPosition} />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>
                <div className="flex flex-col gap-5 text-center justify-center w-[50%] h-[100vh] ml-10">
                    <h1 className="text-5xl">This is sphere</h1>
                    <p className="text-base">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                </div>
            </section>
            <section style={{ ...sectionStyle }} className="bg-cyan-300 text-black">
                <div className="w-[100%] h-[100vh] absolute">
                    <Canvas>
                        <directionalLight position={[0, 0, 2]} intensity={0.5} />
                        <ambientLight intensity={1} />
                        <Globe position={[-35, 0, 0]} size={[1, 32, 32]} color={"orange"} scrollPosition={scrollPosition} />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>
                <div className="flex flex-col gap-5 text-right justify-center w-[50%] h-[100vh] mr-10">
                    <h1 className="text-5xl">This is sphere</h1>
                    <p className="text-base">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Main;
