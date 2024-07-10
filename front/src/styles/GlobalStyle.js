import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
    --primary-color: #000000;
    --primary-color2: rgba(34, 34, 96, 0.6);
    --primary-color3: rgba(34, 34, 96, 0.4);
    --color-green: #42AD00;
    --color-grey: #aaa;
    --color-accent: #F56692;
    --color-delete: #FF0000;

    --dark-background: #000000;
    --dark-text: #ffffff;
    --dark-box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}


    body {
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: var(--dark-text);
        background: var(--dark-background);
        transition: background-color 0.3s ease;
    }


`;
