import { css } from '@emotion/react'
import { color, font } from './globals'

export const GlobalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        font-family: ${font.regular};
        background-color: ${color.white};
        color: ${color.darkblue};

        > #root {
            width: 100%;
            height: 100%;
            position: relative;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: normal;
    }

    a {
        &,
        :hover,
        :focus,
        :visited {
            color: ${color.darkblue};
            text-decoration: none;
        }
    }

    button {
        background-color: ${color.transparent};
        border: none;
        border-radius: 0;

        :hover,
        :focus {
            border: none;
            outline: none;
        }
    }

    li {
        list-style: none;
    }

    @media (-webkit-device-pixel-ratio: 1.25) {
        :root {
            zoom: 0.8;
        }
    }
`

// import { createTheme } from '@mui/material/styles'; // todo use mui theme

// export const theme = createTheme({ // todo use mui theme
//     palette: {
//         primary:
//         {
//             main: "#e06717",
//             contrastText: "#fff",
//         },
//         secondary:
//         {
//             main: "#eceeef",
//             contrastText: "#fff",
//         },
//     }
// })