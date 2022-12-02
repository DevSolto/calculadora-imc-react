import React, { useEffect, useState } from 'react'
import { Container } from './style'

export const Layout = () => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0.0);
    const [BodyMassIndex, setBodyMassIndex] = useState(0);

    useEffect(() => {
        setBodyMassIndex(weight / ((height / 100) * (height / 100)))
    }, [weight, height]);

    return (
        <Container>
            <span>{weight}Kg</span>
            <input type="range" min="0" max="394" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <span>{(height / 100).toFixed(2)}M</span>
            <input type="range" min="0" max="238" value={height} onChange={(e) => setHeight(e.target.value)} />
            <span>{BodyMassIndex.toFixed(2)}</span>
        </Container>
    )
}
