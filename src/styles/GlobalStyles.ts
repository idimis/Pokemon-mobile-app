// src/styles/GlobalStyles.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif; /* Customize font family as needed */
    background-color: #f5f5f5; /* Light background for the app */
    color: #333; /* Default text color */
  }

  a {
    text-decoration: none; /* Remove underlines from links */
    color: inherit; /* Inherit text color */
    transition: color 0.2s; /* Smooth transition for hover effect */
  }

  a:hover {
    color: #0070f3; /* Change color on hover for links */
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0; /* Remove default margins */
    padding: 0; /* Remove default paddings */
  }

  /* Custom container styles */
  .container {
    max-width: 1200px; /* Max width for the container */
    margin: 0 auto; /* Center the container */
    padding: 1rem; /* Padding for the container */
  }
`;

export default GlobalStyles;
