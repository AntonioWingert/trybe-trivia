import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { invalidTokenQuestionsResponse } from '../../cypress/mocks/questions';
import { INITIAL_STATE_GAME, USER_PLAYER_MOCK } from './data/mockdata';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import { act } from 'react-dom/test-utils';

describe('Teste da pagina de jogo', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(INITIAL_STATE_GAME)
        });
    })

    it('Teste se a pergunta é redenzeridaza corretamente', async () => {
        renderWithRouterAndRedux(<App />, USER_PLAYER_MOCK, '/game');

        const questionText = 'DragonForce&#039;s &#039;Through the Fire and Flames&#039; is widely considered to be the hardest song in the Guitar Hero series.';
        const question = await screen.findByRole('heading', { name : questionText, level: 2 });
        expect(question).toBeInTheDocument();
    });

    it('Teste se as opções são rederizadas corretamente', async () => {
        renderWithRouterAndRedux(<App />, USER_PLAYER_MOCK, '/game');

        const answer1 = await screen.findByRole('button', { name: 'False'});
        const answer0 = await screen.findByRole('button', { name: 'True'});
        expect(answer0).toBeInTheDocument();
        expect(answer1).toBeInTheDocument();
    });

    it('Teste se é possível avançar até cinco perguntas e se direciona para a rota "Feedback"', async () => {
        const { history } = renderWithRouterAndRedux(<App />, USER_PLAYER_MOCK, '/game');
        
        const SelectFirstAnswer = await screen.findByRole('button', { name: 'True' });
        userEvent.click(SelectFirstAnswer);
        userEvent.click(await screen.findByRole('button', { name: 'Next' }));

        const SelectSecondAnswer= await screen.findByRole('button', { name: 'True' });
        userEvent.click(SelectSecondAnswer);
        userEvent.click(await screen.findByRole('button', { name: 'Next' }));

        const SelectThirdAnswer= await screen.findByRole('button', { name: 'Tyrannosaurus Rex' });
        userEvent.click(SelectThirdAnswer);
        userEvent.click(await screen.findByRole('button', { name: 'Next' }));

        const SelectFourthAnswer= await screen.findByRole('button', { name: 'Human After All' });
        userEvent.click(SelectFourthAnswer);
        userEvent.click(await screen.findByRole('button', { name: 'Next' }));

        const SelectFifthAnswer= await screen.findByRole('button', { name: '8' });
        userEvent.click(SelectFifthAnswer);
        userEvent.click(await screen.findByRole('button', { name: 'Next' }));
        expect(history.location.pathname).toBe('/feedback');
        
    });

    jest.setTimeout(31000)
    it('Teste para verificar o timer', async () => {
        renderWithRouterAndRedux(<App />, USER_PLAYER_MOCK, '/game');

        const timerThirty = screen.getByText(/tempo restante:30/i);
        expect(timerThirty).toBeInTheDocument()

        const timerZero = await screen.findByText(/tempo restante:0/i, {}, { timeout: 31000 });
        expect(timerZero).toBeInTheDocument();

        const SelectFirstAnswer = await screen.findByRole('button', { name: 'True' });
        expect(SelectFirstAnswer).toBeDisabled();

        userEvent.click(await screen.findByRole('button', { name: 'Next' }));
    });

});
describe('Teste a aplicação com um token inválido', () => {
    it('Teste a aplicação com um token inválido', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(invalidTokenQuestionsResponse)
        });
        const { history } = renderWithRouterAndRedux(<App />, USER_PLAYER_MOCK, '/game');

        act(() => {
            history.push('/game')
        })
    });
});
