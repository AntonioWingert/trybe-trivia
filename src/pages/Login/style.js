import styled from 'styled-components';

export const MainContainer = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 38.375rem;
  height: 16.625rem;
  background-color: ${({ theme }) => theme.titleColor};
  border-radius: 0.625rem;
  gap: 1rem;

  input {
    width: 519px;
    height: 45px;
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.secondary};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.secondary};
      font-size: 14px;
      text-align: start;
    }
  }

  button {
    width: 32.4375rem;
    height: 2.8125rem;
    border: none;
    background-color: ${({ theme }) => theme.green};
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.titleColor};
    font-weight: 700;
    font-size: 16px;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;
