import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > img {
    width: 8.5rem;
    height: 8.5625rem;
    margin: 1.5625rem;
  }

  `;

export const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  bottom: 80px;
  
  > img {
    width: 213px;
    height: 213px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.green};
    position: relative;
    top: 5rem;
  }
  
  .cbb-img {
    border: 4px solid ${({ theme }) => theme.red};
  }

  .cbb {
    color: ${({ theme }) => theme.red}
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 439px;
    height: 278px;
    background-color: ${({ theme }) => theme.titleColor};
    box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    color: ${({ theme }) => theme.green};

    h3 {
      font-weight: 700;
      font-size: 30px;
      text-align: center;
      margin: 1rem;
    }
  }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30rem;

  .play-again {
    background-color: ${({ theme }) => theme.green};
  }


  button {
    background-color: ${({ theme }) => theme.lightBlue};
    width: 13.4375rem;
    height: 2.8125rem;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    a {
      color: ${({ theme }) => theme.titleColor};
      font-weight: 700;
      font-size: 16px;
    }
  }
      

`;
