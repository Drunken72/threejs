import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Sphere = ({ size, position, color }) => {

    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    useFrame((state, delta) => {
        const speed = isHovered ? 1 : 0.2
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta * speed;
        // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2

    })
    return (
        <>
            <mesh position={position} ref={ref}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
                onClick={() => setIsClicked(!isClicked)}
                scale={isClicked ? "1.5" : "1"}
            >
                <sphereGeometry args={size} />
                <meshStandardMaterial color={isHovered ? "black" : "orange"} wireframe />
            </mesh>
        </>
    )
}

export default Sphere