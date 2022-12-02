import React, { useEffect, useState } from 'react'
import { Box, Container, Dado, Range, Title } from './style'

export const Layout = () => {

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0.0);
    const [BodyMassIndex, setBodyMassIndex] = useState(0);
    const [className, setClassName] = useState('initialState');

    useEffect(() => {
        const bmi = weight / ((height / 100) * (height / 100))
        setBodyMassIndex(bmi)
        if (bmi < 18.5) {
            setClassName('bad')
        } else if (bmi < 25) {
            setClassName('good')
        } else if (bmi < 30) {
            setClassName('bad')
        } else {
            setClassName('terrible')
        }
    }, [weight, height]);

    return (

        <Container className={className}>
            <Title>Calculadora de IMC em tempo real.</Title>
            <Box className={className}>
                <Dado>{weight}Kg</Dado>
                <Range type="range" min="0" max="394" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </Box>
            <Box className={className}>
                <Dado>{(height / 100).toFixed(2)}M</Dado>
                <Range type="range" min="0" max="238" value={height} onChange={(e) => setHeight(e.target.value)} />
            </Box>
            <Dado>{BodyMassIndex.toFixed(2)}</Dado>
        </Container>
    )
}
