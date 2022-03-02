import React from 'react';
import './Footer.css';

class Header extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>
          Copyright
          { ' ' }
          CostelaStore®
          { ' ' }
          criado
          { ' ' }
          por
          { ' ' }
          Pedro
          { ' ' }
          Henrique
          { ' ' }
          Mendes
          { ' ' }
          |
          { ' ' }
          João
          { ' ' }
          Gabriel
          { ' ' }
          Spinelli
          { ' ' }
          |
          { ' ' }
          Marcus
          { ' ' }
          Vinícius
          { ' ' }
          (Kako)
          { ' ' }
          |
          { ' ' }
          Fabricio
          { ' ' }
          Martins
        </p>
      </div>
    );
  }
}

export default Header;
