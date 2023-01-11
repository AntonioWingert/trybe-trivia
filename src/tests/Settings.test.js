import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import renderWithRouterAndRedux from "../tests/helpers/renderWithRouterAndRedux";

describe('Verificando a page /Settings/', () => {
  it('Verifica se ao clicar no Link /configurações/ a pagina Settings é renderizada', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const btn = screen.getByRole('link', {  name: /configurações/i})

    userEvent.click(btn)
    expect(history.location.pathname).toBe('/settings')
    
  }); 
});



