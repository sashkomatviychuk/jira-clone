import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 1px;
  }

  h2 {
    font-size: 22px;
    font-weight: 500;
  }

  a, button, label {
    letter-spacing: 0.7px;
  }
`;
