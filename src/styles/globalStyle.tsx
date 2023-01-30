import { createGlobalStyle } from 'styled-components';

/*
Fonts: Poppins and Playfair Display

Dark
#6c46ce
#7800ff
#b851de

White
#e7c4f3
#ceabfc
#daa5ee
#f8f8f8
#ffffff
*/

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      // fonts: Poppins and Playfair Display
      font-family: 'Poppins', sans-serif;
    }

    body {
      background-color: #6c46ce;
      overflow-x: hidden;
    }
`
