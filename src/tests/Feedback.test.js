import { screen } from "@testing-library/react";
import Feedback from "../pages/Feedback/Feedback";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";

describe('Testando o componente /FeedbackCard/', () => {
  it('Verifica se o botão /Ranking/ é renderizado', () => {
    renderWithRouterAndRedux(<Feedback/>)
    const btnRanking = screen.getByRole('button', {  name: /ranking/i})
    expect(btnRanking).toBeInTheDocument();
  }); 

  it('Verifica se o botão /Play Again/ é renderizado', () => {
    renderWithRouterAndRedux(<Feedback/>)
    const btnPlay = screen.getByRole('button', {  name: /play again/i})
    expect(btnPlay).toBeInTheDocument();
  });

  it('Verifica se ao acertar 3 ou mais questões a mensagem /Well Done!/ é exibida', () => {
    const state = {
      player: {
        name: 'João',
        gravatarEmail: 'b642b4217b34b1e8d3bd915fc65c4452',
        score: 0,
        assertions: 3,
      }
    }
    renderWithRouterAndRedux(<Feedback/>, state)
    const msg = screen.getByRole('heading', {  name: /well done!/i})
    expect(msg).toBeInTheDocument();
  });
  
  it('Verifica se ao acertar 2 questões ou menos a mensagem /Could be better.../ é exibida', () => {
    const state = {
      player: {
        name: 'Pedro',
        gravatarEmail: 'b642b4217b34b1e8d3bd915fc65c4452',
        score: 0,
        assertions: 1,
      }
    }
    renderWithRouterAndRedux(<Feedback/>, state)
    const msg = screen.getByRole('heading', {  name: /could be better\.\.\./i})
    expect(msg).toBeInTheDocument();
  });
});