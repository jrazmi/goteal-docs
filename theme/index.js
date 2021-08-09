import { createGlobalStyle } from 'styled-components';


export const DarkTheme = {
    colors: {
        body: "#171717",
        title: "#5db6a6",
        font: "#ecf0f1",
    }
}

export const LightTheme = {
    colors: {
        body: "#ecf0f1",
        title: "#5db6a6",
        font: "#171717"
    }
}

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({theme}) => theme.colors.body};
        color: ${({theme}) => theme.colors.font};
        font-family: Roboto, sans-serif;
        transition: all 0.25s linear;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    legend,
    a,
    label {
        color: ${({theme}) => theme.colors.title};
    }
    .logo {
        font-size:24px;fill:#5db6a6;font-family:Overpass-ExtraLightItalic, Overpass;font-weight:200;font-style:italic;
    }
`;
