import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App';

describe('Requisito 5, componente Pokédex', () => {
  const buttonText = 'Próximo pokémon';
  test('Testa se página contém um heading h2 com o texto Encountered pokémons', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i });
    expect(h2).toBeInTheDocument();
  });

  test('Testa botão Próximo pokémon é clicado', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    const nextPokemon = screen.getByText(/Charmander/i);
    expect(nextPokemon).toBeInTheDocument();
  });

  test('Testa se os Pokémons da lista vão ser mostrados, um a um', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    const details = screen.getAllByRole('link', { name: 'More details' });
    expect(details).toHaveLength(1);
  });

  test('Testa após último Pokémon da lista, reaparece o primeiro', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toBeInTheDocument();
    let i = 1;
    const roof = 9;
    while (i <= roof) {
      userEvent.click(button);
      i += 1;
    }
    const pokemon = screen.getByText(/Pikachu/i);
    expect(pokemon).toBeInTheDocument();
  });

  test('Testa possui botão para cada tipo de Pokémon, sem repetição', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);
    const number = 7;

    const filterButton = screen.getAllByTestId('pokemon-type-button');
    expect(filterButton).toHaveLength(number);
    expect(filterButton[0]).toHaveTextContent(/Electric/i);
    expect(filterButton[1]).toHaveTextContent(/Fire/i);
    expect(filterButton[2]).toHaveTextContent(/bug/i);
    expect(filterButton[3]).toHaveTextContent(/Poison/i);
    expect(filterButton[4]).toHaveTextContent(/Psychic/i);
    expect(filterButton[5]).toHaveTextContent(/Normal/i);
    expect(filterButton[6]).toHaveTextContent(/Dragon/i);
  });

  test('Testa filtro mostrar somente pelos pokémons daquele tipo;', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const filterButton = screen.getAllByRole('button');
    userEvent.click(filterButton[3]);

    const pokemon = screen.getByText(/Caterpie/i);
    expect(pokemon).toBeInTheDocument();
  });

  test('Testa texto do botão', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const filterButton = screen.getAllByRole('button');

    expect(filterButton[3]).toHaveTextContent('Bug');
  });

  test('O botão All precisa estar sempre visível', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const allButton = screen.getByText(/all/i);
    expect(allButton).toBeInTheDocument();
    userEvent.click(allButton);
    expect(allButton).toBeInTheDocument();
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const allButton = screen.getByText(/all/i);
    userEvent.click(allButton);
    const button = screen.getByRole('button', { name: buttonText });
    userEvent.click(button);

    const nextPokemon = screen.getByText(/Charmander/i);
    expect(nextPokemon).toBeInTheDocument();
  });
});
