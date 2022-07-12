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