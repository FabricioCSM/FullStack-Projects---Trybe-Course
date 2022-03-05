import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import App from '../App';

describe('Requisito 4, componente Not Found', () => {
  test('Testa se pag contém um heading h2 com o texto Page requested not found 😭', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    history.push('/adsasd');
    const notFound = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(notFound).toBeInTheDocument();
  });

  test('Testa se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    history.push('/adsasd');
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const n = screen
      .getByAltText(/Pikachu crying because the page requested was not found/i);
    expect(n.src).toBe(url);
  });
});
