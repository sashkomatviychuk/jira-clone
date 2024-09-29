import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'jira';
    src: url('/fonts/jira.woff') format('truetype'), url('/fonts/jira.ttf') format('woff'),
      url('/fonts/jira.svg#jira') format('svg');
    font-weight: normal;
    font-style: normal;
  }

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
