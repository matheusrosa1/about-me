import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<{ blur?: boolean }>`
  :root {
    font-family: "Roboto Serif", sans-serif;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    transition: all 0.6s ease;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyles;
