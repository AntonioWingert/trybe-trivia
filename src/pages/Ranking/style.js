import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
  
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 489px;
  height: 488px;
  background-color: ${({ theme }) => theme.titleColor};
  box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  gap: 1rem;
  color: ${({ theme }) => theme.darkBlue};

  h1 {
    position: relative;
    bottom: 80px;
  }

  button {
    background-color: ${({ theme }) => theme.green};
    width: 386px;
    height: 45px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
      color: ${({ theme }) => theme.titleColor};
      font-weight: 700;
      font-size: 16px;
    }

    position: relative;
    bottom: 50px;
  }

  > img {
    width: 177px;
    height: 178px;
    position: relative;
    bottom: 80px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 386px;
    height: 55px;
    background-color: ${({ theme }) => theme.backgroundGray};
    border-radius: 100px;
    padding-left: 20px;  
    position: relative;
    bottom: 80px;
    

    img {
      width: 37px;
      height: 37px;
      border-radius: 50%;
    }    
  }
`;

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`;

export const PointsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  width: 184px;
  height: 55px;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  background-color: ${({ theme }) => theme.titleColor};
  font-weight: 700;


  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.yellow};
  }
`;
