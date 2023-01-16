import { Ubuntu } from "@next/font/google";
import { createGlobalStyle } from "styled-components";

const ubuntuFont = Ubuntu({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

const GlobalStyle = createGlobalStyle`
  :root {
    // primary
    --max-width: 800px;
    --border-radius: 7px;

    --Marine-blue: hsl(213, 96%, 18%);
    --Purplish-blue: hsl(243, 100%, 62%);
    --Pastel-blue: hsl(228, 100%, 84%);
    --Light-blue: hsl(206, 94%, 87%);
    --Strawberry-red: hsl(354, 84%, 57%);

    // neutral 
    --Cool-gray: hsl(231, 11%, 63%);
    --Light-gray: hsl(229, 24%, 87%);
    --Magnolia: hsl(217, 100%, 97%);
    --Alabaster: hsl(231, 100%, 99%);
    --White: hsl(0, 0%, 100%);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: ${ubuntuFont.style.fontFamily};
    flex-wrap: wrap;
  }

  h1 {
    color: var(--Marine-blue);
    font-weight: 700;
  }

  label {
    display: block;
    color: var(--Marine-blue);
    font-size: small;
    margin-bottom: .4rem;
    font-weight: 500;
  }

  input {
    padding: .8rem;
    width: 100%;
    border-radius: var(--border-radius);
    outline: 0;
    border: 1px solid var(--Light-gray);
    font-size: 14px;
    color: var(--Marine-blue);
    font-weight: 700;
  }

  input[type=text]:focus {
    border: 1px solid var(--Purplish-blue);
  }

  input[type=text]:required {
    border: 1px solid var(--Strawberry-red);
  }

  input[type=checkbox] { 
    cursor: pointer;
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
  }

  body {
    background-color: var(--Magnolia);
  }

  p { 
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
