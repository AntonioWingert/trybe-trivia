import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 50px;
    color: ${({ theme }) => theme.titleColor};
  }
`;

export default Container;
