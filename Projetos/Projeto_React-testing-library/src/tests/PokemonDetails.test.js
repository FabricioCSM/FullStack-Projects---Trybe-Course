import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App';

describe('Requisito 7, componente PokemonDetails', () => {
  const details = 'More details';
  test('Testa info detalhadas do Pokémon selecionado são mostradas na tela', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);
    history.push('pokemons/25');

    const summary = screen.getByRole('heading', { name: 'Summary' });
    const pokemonSummary = screen.getByText(/This intelligent Pokémon /i);
    const pokemonDetails = screen.getByText('Pikachu Details');
    const pokemonDetailsLink = screen.queryByRole('link', { name: /more details/i });

    expect(summary).toBeInTheDocument();
    expect(pokemonDetails).toBeInTheDocument();
    expect(pokemonDetailsLink).toBeNull();
    expect(pokemonSummary).toBeInTheDocument();
  });

  test('Testa na pág uma seção com os mapas contendo as localizações do pokémon', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const pokemonDetailsLink = screen.getByRole('link', { name: details });
    userEvent.click(pokemonDetailsLink);

    const headingMap = screen.getByRole('heading', { name: 'Game Locations of Pikachu' });
    const pokemonMaps = screen.getAllByAltText(/Pikachu location/i);
    expect(pokemonMaps).toHaveLength(2);
    pokemonMaps.forEach((map) => {
      expect(map).toBeInTheDocument();
    });
    expect(headingMap).toBeInTheDocument();
    expect(pokemonMaps[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  });

  test('Testa ícone de estrela nos Pokémons favoritados', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const pokemonDetailsLink = screen.getByRole('link', { name: 'More details' });
    userEvent.click(pokemonDetailsLink);
    const favoriteCheckbox = screen.getByRole('checkbox', { checked: false });
    userEvent.click(favoriteCheckbox);
    const favoriteButton = screen.getByLabelText(/pokémon favoritado/i);
    expect(favoriteCheckbox).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
  });
});
