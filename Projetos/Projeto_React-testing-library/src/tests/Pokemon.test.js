import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App';

describe('Requisito 6, componente Pokemon', () => {
  const urlDetail = '/pokemons/25';
  test('Testa se o card do pokemon aparece com todas as infos', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const imagePokemon = screen.getByAltText(/Pikachu sprite/i);
    const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonType).toHaveTextContent('Electric');
    expect(pokemonWeight).toBeInTheDocument();
    expect(imagePokemon).toBeInTheDocument();
    expect(imagePokemon.src).toBe(url);
  });

  test('Testa link de navegação com detalhes do Pokemon', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const pokemonDetailsLink = screen.getByRole('link', { name: 'More details' });
    expect(pokemonDetailsLink).toHaveAttribute('href', urlDetail);
    expect(pokemonDetailsLink).toBeInTheDocument();

    userEvent.click(pokemonDetailsLink);
    const pokemonDetail = screen.getByRole('heading', { name: 'Pikachu Details' });
    expect(pokemonDetail).toBeInTheDocument();
    const { pathname } = history.location;
    expect(pathname).toBe(urlDetail);
  });

  test('Testa ícone de estrela nos Pokémons favoritados', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const pokemonDetailsLink = screen.getByRole('link', { name: 'More details' });
    userEvent.click(pokemonDetailsLink);
    const favoriteCheckbox = screen.getByRole('checkbox', { checked: false });
    userEvent.click(favoriteCheckbox);
    const favoritedImage = screen.getByAltText(/Pikachu is marked as favorite/i);
    const favoriteSrc = 'http://localhost/star-icon.svg';
    expect(favoritedImage).toBeInTheDocument();
    expect(favoritedImage.src).toBe(favoriteSrc);
  });
});
