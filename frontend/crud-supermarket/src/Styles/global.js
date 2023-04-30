import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body, button, a {
      color: ${({ theme }) => theme.COLORS.TEXT};
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem; 
      font-weight: 400;
    }

    body {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      background-color: ${({ theme })=> theme.COLORS.BG};
    }

    a {
      text-decoration: none;
    }

    button:hover {
      cursor: pointer;
    }







`;