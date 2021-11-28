import { createGlobalStyle } from "styled-components";

const CSSVariables = createGlobalStyle`
  :root {
    --font-primary: "Open Sans", sans-serif;
    --font-secondary: "Lobster Two", cursive;
    --color-background: hsla(0, 0%, 87%, 1)
    --color-text: hsla(0, 0%, 15%, 1);
    --color-accent: rgba(221, 42, 123, 1);

    --max-width: 800px;
    --outline: 2px dashed var(--color-accent);
  }
`;

export default CSSVariables;
