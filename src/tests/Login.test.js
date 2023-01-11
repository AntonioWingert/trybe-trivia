import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import renderWithRouterAndRedux from "../tests/helpers/renderWithRouterAndRedux";

describe('Verificando a page /Login/', () => {
  it('Verificando de o input /name/ é renderizado', () => {
    renderWithRouterAndRedux(<App />)
    const inputName = screen.getByPlaceholderText('Digite seu Nome')
    expect(inputName).toBeInTheDocument();
  }); 

  it('Verificando de o input /email/ é renderizado', () => {
    renderWithRouterAndRedux(<App />)
    const inputEmail = screen.getByPlaceholderText(/Digite seu Email/i)
    expect(inputEmail).toBeInTheDocument();
  }); 

  it('Verificando de o input /botão/ é renderizado', () => {
    renderWithRouterAndRedux(<App />)
    const btn = screen.getByRole('button', {  name: /play/i})
    expect(btn).toBeInTheDocument();
  }); 

  it('Ao escrever o nome e o email o botão é habilitado', () => {
    const { history } = renderWithRouterAndRedux(<App />)
    const inputName = screen.getByPlaceholderText('Digite seu Nome')
    const inputEmail = screen.getByPlaceholderText(/Digite seu Email/i)
    const btn = screen.getByRole('button', {  name: /play/i})
    
    userEvent.type(inputName, 'miguelito')
    expect(btn).toBeDisabled();
    userEvent.type(inputEmail, 'miguel@novocomputador.com')
    expect(btn).toBeEnabled();
    userEvent.click(btn)
    waitFor(() => {
      expect(history.location.pathname).toBe('/game')
    })
  }); 
});