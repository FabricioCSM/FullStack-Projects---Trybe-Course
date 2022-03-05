import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App';

describe('Requisito 2, página About', () => {
  test('Testa se a pág contém info sobre pokedex', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const pageLinks = screen.getByRole('link', { name: 'About' });
    userEvent.click(pageLinks);

    const title = screen.getByText(/about pokédex/i);
    const text = screen.getByText(/this application simulates/i);

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const pageLinks = screen.getByRole('link', { name: 'About' });
    userEvent.click(pageLinks);

    const about = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(about).toBeInTheDocument();
  });

  test('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const pageLinks = screen.getByRole('link', { name: 'About' });
    userEvent.click(pageLinks);

    const paragraphs = screen.getAllByText(/Pokémons/i);
    paragraphs.shift();
    expect(paragraphs).toHaveLength(2);
  });

  test('Testa se a página contém a seguinte imagem de uma Pokédex', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const pageLinks = screen.getByRole('link', { name: 'About' });
    userEvent.click(pageLinks);

    const pokedex = screen.getByRole('img', { alt: 'Pokédex' });
    expect(pokedex.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
