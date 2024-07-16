import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const Globe = ({ size, position, color, scrollPosition }) => {
    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        ref.current.rotation.x = Math.PI / 4; // 45 degrees
    }, []);

    useFrame((state, delta) => {
        const speed = isHovered ? 1 : 0.2;
        ref.current.rotation.y += delta * speed;

        // Calculate the x position based on scroll position
        const initialX = position[0];
        const scrollMultiplier = 1; // Adjust multiplier for desired speed
        const sphereX = initialX + scrollPosition * state.viewport.width * scrollMultiplier;

        ref.current.position.x = sphereX;
    });


    return (
        <mesh
            position={position}
            ref={ref}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            onClick={() => setIsClicked(!isClicked)}
            scale={isClicked ? 1.5 : 1}
        >
            <sphereGeometry args={size} />
            <meshStandardMaterial color={isHovered ? "black" : color} wireframe />
        </mesh>
    );
};

export default Globe;
