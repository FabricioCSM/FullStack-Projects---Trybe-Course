import React, { Component } from 'react';
import p from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div className="solarSystem" data-testid="solar-system">
        <Title headline="Planetas" />
        <section>
          {
            p.map((a, i) => (
              <PlanetCard
                key={ i }
                planetName={ a.name }
                planetImage={ a.image }
              />))
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
