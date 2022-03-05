import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App';

describe('Teste se o topo da api contém um conjunto fixo de links de navegação', () => {
  test('Testa se o primeiro link possui o texto "Home"', () => {
    render(<Router history={ createMemoryHistory() }><App /></Router>);
    const pageLinks = screen.getByRole('link', { name: 'Home' });
    expect(pageLinks).toBeInTheDocument();
  });

  test('Testa se o primeiro link possui o texto "About"', () => {
    render(<Router history={ createMemoryHistory() }><App /></Router>);
    const pageLinks = screen.getByRole('link', { name: 'About' });
    expect(pageLinks).toBeInTheDocument();
  });

  test('Testa se o primeiro link possui o texto "Favorite Pokémons"', () => {
    render(<Router history={ createMemoryHistory() }><App /></Router>);
    const pageLinks = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(pageLinks).toBeInTheDocument();
  });
});

describe('Testa se ao clicar nos links, é redirecionado para as pág corretas', () => {
  test('Ao clicar em "Home", redireciona para a pág inicial', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);
    const pageLinks = screen.getByRole('link', { name: 'Home' });
    userEvent.click(pageLinks);
    const path = history.location.pathname;
    expect(path).toBe('/');
  });

  test('Ao clicar em "About", redireciona para a pág about', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);
    const pageLinks = screen.getByRole('link', { name: 'About' });
    userEvent.click(pageLinks);
    const path = history.location.pathname;
    expect(path).toBe('/about');
  });

  test('Ao clicar em "Favorite Pokémons", redireciona para a pág favoritos', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);
    const pageLinks = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(pageLinks);
    const path = history.location.pathname;
    expect(path).toBe('/favorites');
  });

  test('Testa se a aplicação é redirecionada para a página Not Found ', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);
    history.push('/adsasd');
    const notFound = screen.getByText(/Page requested not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
