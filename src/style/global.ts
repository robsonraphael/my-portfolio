import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;
