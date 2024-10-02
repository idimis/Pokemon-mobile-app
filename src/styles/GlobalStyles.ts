// src/styles/GlobalStyles.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif; /* You can customize this */
    background-color: #f5f5f5; /* Light background color */
    color: #333; /* Default text color */
  }

  a {
    text-decoration: none; /* Remove underline from links */
    color: inherit; /* Inherit color from parent */
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto; /* Center the container */
    padding: 1rem; /* Padding for the container */
  }
`;

export default GlobalStyles;
