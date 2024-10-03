

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif; 
    background-color: #f5f5f5; 
    color: #333; /* Default text color 
  }

  a {
    text-decoration: none; 
    color: inherit; 
    transition: color 0.2s; 
  }

  a:hover {
    color: #0070f3; 
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0; 
    padding: 0; 
  }

  
  .container {
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 1rem; 
  }
`;

export default GlobalStyles;
