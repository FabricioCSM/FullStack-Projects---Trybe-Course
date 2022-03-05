import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App';

describe('Requisito 3, página Favorite Pokémons', () => {
  test('Testa se é exibido na tela a mensagem No favorite pokemon found', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const pageLinks = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(pageLinks);

    const noPokemon = screen.getByText(/No favorite pokemon found/i);
    expect(noPokemon).toBeInTheDocument();
  });

  test('Testa se é exibido todos os cards de pokémons favoritados', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const details = screen.getByRole('link', { name: 'More details' });
    userEvent.click(details);
    const favoriteCheckbox = screen.getByRole('checkbox', { checked: false });
    userEvent.click(favoriteCheckbox);
    expect(favoriteCheckbox).toBeChecked();
    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favoriteLink);
    const favoritePokemon = screen.getAllByTestId(/pokemon-name/i);

    expect(favoritePokemon).toHaveLength(1);
  });
});
