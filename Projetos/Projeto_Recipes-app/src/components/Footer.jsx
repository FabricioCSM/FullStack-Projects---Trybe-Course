import React from 'react';
import { Nav } from 'react-bootstrap';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

function Footer() {
  return (
    <footer className="bg-success fixed-bottom px-4 py-3" data-testid="footer">
      <Nav className="justify-content-between">
        <Nav.Link href="/drinks">
          <img src={ drinkIcon } alt="" data-testid="drinks-bottom-btn" />
        </Nav.Link>
        <Nav.Link href="/explore">
          <img src={ exploreIcon } alt="" data-testid="explore-bottom-btn" />
        </Nav.Link>

        <Nav.Link href="/foods">
          <img src={ mealIcon } alt="" data-testid="food-bottom-btn" />
        </Nav.Link>
      </Nav>
    </footer>
  );
}

export default Footer;
