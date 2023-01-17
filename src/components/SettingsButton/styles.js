import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme }) => theme.darkBlue};
    width: 32.4375rem;
    height: 2.8125rem;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    a {
      color: ${({ theme }) => theme.titleColor};
      font-weight: 700;
      font-size: 16px;
    }

`;

export default Button;
