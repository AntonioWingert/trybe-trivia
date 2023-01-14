import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  width: 100vw;
  height: 100vh;
}

body {  
  background-color: ${({ theme }) => theme.darkBlue};
  background-size: cover;
  font-family: 'Inter', sans-serif;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
}

.green {
  border: 3px solid rgb(6, 240, 15);
}

.red {
  border: 3px solid red;
}
`;

export default GlobalStyle;
