import styled from 'styled-components';

export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const QuestionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 200px;
    height: 222px;
    position: relative;
    top: -5.625rem;
  }

  .question {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 439px;
    height: 290px;
    box-shadow: 1px 4px 13px 2px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.titleColor};

    p {
      position: relative;
      bottom: -80px;
      color: ${({ theme }) => theme.red};
    }
  }

  .category {

    display: flex;
    align-items: center;
    justify-content: center;
    width: 413px;
    height: 45px;
    background-color: ${({ theme }) => theme.lightBlue};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100px;
    z-index: 999;
    position: relative;
    top: 20px;

    p {
      font-size: 16px;
      color: ${({ theme }) => theme.titleColor};
    }

  }

`;

export const QuestsContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    margin-top: 250px;


    button {
      width: 510px;
      height: 64px;
      border-radius: 100px;
      background-color: ${({ theme }) => theme.titleColor};
      color: ${({ theme }) => theme.primary}
  
    }

    .next-button {
      background-color: ${({ theme }) => theme.green};
      border: none;
      font-weight: 700;
      color: white;
      font-size: 24px;
    }
  }

`;
