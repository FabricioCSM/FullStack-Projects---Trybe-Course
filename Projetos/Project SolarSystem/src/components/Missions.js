import React, { Component } from 'react';
import missionsData from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <div>
        <div className="missionTitle" data-testid="missions">
          <Title headline="Missões" />
        </div>
        <section className="missionCards">
          {missionsData.map((a, i) => (
            <MissionCard
              key={ i }
              name={ a.name }
              year={ a.year }
              country={ a.country }
              destination={ a.destination }
            />))}
        </section>
      </div>
    );
  }
}

export default Missions;
