import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'


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
    ${normalize}
    *:focus {
        outline: none !important;
        box-shadow: none !important;
    } 
    body {
        background: ${({theme}) => theme.colors.body};
        color: ${({theme}) => theme.colors.font};
        font-family: Overpass, sans-serif;
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
    .navbar {
        .navbar-nav {
            
            .nav-link {
                color: ${({theme}) => theme.colors.title};
            }
            .nav-link:hover,
            .nav-link:focus,
            .nav-link.active,
            .nav-link:active {
                color: ${({theme}) => theme.colors.font};
            }
            .show {
                .nav-link {
                    color: ${({theme}) => theme.colors.title};
                }
            }
        }
    }
`;