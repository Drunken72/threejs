const Donut = ({ position, size, color }) => {
    return (
        <>
            <mesh position={position}>
                <torusGeometry args={size} />
                <meshStandardMaterial color={color} />
            </mesh>
        </>
    )
}

export default Donut