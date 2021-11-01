import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    return (
      <div className="solarSystem">
        <div className="planets" data-testid="planet-card">
          <p data-testid="planet-name">{ planetName }</p>
          <img className="image" src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
