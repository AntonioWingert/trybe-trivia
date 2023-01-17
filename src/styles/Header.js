import styled from 'styled-components';

export const MainContainer = styled.section`
  width: 100vw;
  height: 7.0625rem;
  background-color: ${({ theme }) => theme.titleColor};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 25vw;
  height: 3.125rem;
  align-items: center;
  justify-content: space-between;
  margin-right: 3.125rem;

  button {
    background: none;
    border: none;

    svg {
      width: 32px;
      height: 32px;
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  gap: .5rem;
  color: #000;

  img {
    width: 37px;
    height: 37px;
    border-radius: 50%;
  }

  p {
    text-transform: capitalize;
  }
`;

export const ScoreContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: .5rem;
  color: #000;

  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.yellow};
  }

  p {
    text-transform: capitalize;
  }
`;
