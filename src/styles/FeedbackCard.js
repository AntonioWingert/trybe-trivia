import styled from 'styled-components';

const MainContainer = styled.div`
  width: 360px;
  height: 50px;
  background-color: ${({ theme }) => theme.titleColor};
  color: ${({ theme }) => theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 700;
`;

export default MainContainer;
