import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Stars.css';

class Stars extends React.Component {
  render() {
    const { handleClick, stars } = this.props;
    const totalStars = 5;
    const numbers = new Array(totalStars).fill(0);
    return (
      <div className="stars">
        { numbers.map((_, index) => (
          stars < index ? (
            <FaRegStar
              key={ index }
              onClick={ () => handleClick(index) }
            />
          ) : (
            <FaStar
              key={ index }
              onClick={ () => handleClick(index) }
            />
          )
        )) }
      </div>
    );
  }
}

export default Stars;

Stars.defaultProps = {
  handleClick: () => {},
};

Stars.propTypes = {
  handleClick: PropTypes.func,
  stars: PropTypes.number.isRequired,
};
