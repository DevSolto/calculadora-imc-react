import styled from "styled-components";

export const Container = styled.main`
    font-family: 'Inter', sans-serif;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    color: #fff;

    .terrible{
        border-radius: 50px;
        background: linear-gradient(225deg, #762121, #8c2828);
        box-shadow:  -12px 12px 23px #6f1f1f, 12px -12px 23px #972b2b;
    }
    .bad{
        border-radius: 50px;
        background: linear-gradient(225deg, #9d4f1b, #ba5e20);
        box-shadow:  -12px 12px 23px #944b1a,
                    12px -12px 23px #c86523;
    }
    .good{
        border-radius: 50px;
        background: linear-gradient(225deg, #1b9d35, #20ba3f);
        box-shadow:  -12px 12px 23px #1a9432,
                    12px -12px 23px #23c844;
    }

`
export const Title = styled.h1`
    font-size: 3rem;
`
export const Box = styled.div`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 98%;
    max-width: 600px;
    
    

`
export const Dado = styled.p`
    font-size: 1.6rem;
`
export const Range = styled.input`

    width: 80%;
`