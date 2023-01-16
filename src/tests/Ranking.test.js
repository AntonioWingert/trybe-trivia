import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import Ranking from '../pages/Ranking/Ranking';

const players = [
  {
    name: 'rafael',
    gravatarEmail: '5cff85cd6afb145bae945d6112dfdb11',
    score: 136,
    assertions: 2,
  },
  {
    name: 'bruno',
    gravatarEmail: '4675ee57486c6ab9507d64d763ffd4f3',
    score: 212,
    assertions: 4,
  },
]

localStorage.setItem('PLAYERS', JSON.stringify(players))

describe('Verificando a page /Ranking/', () => {
  it('Verificando de o título é renderizado', () => {
    renderWithRouterAndRedux(<Ranking />)
    const title = screen.getByRole('heading', {  name: /ranking/i})
    expect(title).toBeInTheDocument();
  }); 

  it('Verificando de o botão Jogar novamente é renderizado', () => {
    renderWithRouterAndRedux(<Ranking />)
    const btn = screen.getByRole('button', {  name: /jogar novamente/i})
    expect(btn).toBeInTheDocument();
  }); 

  it('Verificando de o botão /home/ redireciona para a página /home/', async () => {
    const { history } = renderWithRouterAndRedux(<Ranking />);
    const btn = screen.getByRole('button', {  name: /jogar novamente/i});
    userEvent.click(btn);
    expect(history.location.pathname).toBe('/');
  });

  it('Verificando se é renderizado a imagem do jogador ', () => {
    renderWithRouterAndRedux(<Ranking />)
    const img = screen.getAllByTestId('header-profile-picture')[0]
    expect(img).toBeInTheDocument();
  });
  
  it('Verificando se é renderizado o nome do jogador ', async () => {
    renderWithRouterAndRedux(<Ranking />)
    const name = screen.getByTestId('player-name-0')
    expect(name).toBeInTheDocument();
  });

  it('Verificando se é renderizado a pontuação do jogador ', () => {
    renderWithRouterAndRedux(<Ranking />)

    const score = screen.getByTestId('player-score-0')
    expect(score).toBeInTheDocument();
  });

  // it('Verificando se é renderizado a quantidade de questões acertadas ', () => {
  //   renderWithRouterAndRedux(<Ranking />)

  //   const assertions = screen.getByTestId('player-assertions-0')
  //   expect(assertions).toBeInTheDocument();
  // });

  it('Verificando se o ranking esta vazio.', () => {
    localStorage.clear();
    renderWithRouterAndRedux(<Ranking />)
    const name = screen.queryByTestId('player-name-0')
    expect(name).not.toBeInTheDocument();
  });
});
