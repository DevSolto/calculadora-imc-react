import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .terrible{
        background-color: #832525;
    }
    .bad{
        background-color: #ae581e;
    }
    .good{
        background-color: #1eae3b;
    }
    html, body, #root{
        width: 100vw;
        height: 100vh;
    }
`