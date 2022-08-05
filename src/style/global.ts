import { createGlobalStyle } from "styled-components";

// Global Style
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

    &::-webkit-scrollbar{
        width: 12px;
        background-color:  #202324;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #24283B;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: #454a4d;
        border-radius: 1px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: rgb(89, 94, 97)
    }
`;