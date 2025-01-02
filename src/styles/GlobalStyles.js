import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    body {
        background-color:${COLORS.dark};
        font-family: ${FONTS.poppins};
    }
`;
