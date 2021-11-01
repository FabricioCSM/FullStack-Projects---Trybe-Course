import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Title.css';

class Title extends Component {
  render() {
    const { headline } = this.props;

    return (
      <div className="titles">
        <h2 className="headlines">{ headline }</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
