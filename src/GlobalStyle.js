import { createGlobalStyle } from "styled-components";
import background from "./images/backgrund.jpg"

export const GLobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after, ::before {
    box-sizing: inherit;
}

body {
    font-family: "Poppins";
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: url("${background}");
    background-size: cover;
    background-position: center;
}

.flexContainer {
    flex-basis: 600px;
}
`;