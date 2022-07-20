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

// Colors
export const Colors = {
    "Ebony": "#24283B",
    "Mirage": "#1a1b26",
    "Comet": "#565F89",
    "Biloba": "#BB9AF7",
    "Portage": "#7AA2F7",
    "Mint": "#B4F9F8",
    "Feijoa": "#9ECE6A",
    "Desert": "#E0AF68",
}