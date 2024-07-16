import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react"

const Knot = ({ position, size, color }) => {
    const ref = useRef();
    // useFrame((state, delta) => {
    //     ref.current.rotation.x += delta;
    //     ref.current.rotation.y += delta * 2;
    // })
    return (
        <>
            <mesh position={position} ref={ref}>
                <torusKnotGeometry args={size} />
                <meshStandardMaterial color={color} />
                {/* <MeshWobbleMaterial factor={5} speed={1} /> */}
            </mesh>
        </>
    )
}

export default Knot