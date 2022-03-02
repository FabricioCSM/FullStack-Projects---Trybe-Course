import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import './Comment.css';

class Comment extends React.Component {
  render() {
    const { email, body, stars } = this.props;
    return (
      <div className="comment">
        <h5 className="comment-author">
          { email }
        </h5>
        <Stars stars={ stars } />
        <p className="comment-body">
          { body }
        </p>
        <hr className="line" />
      </div>
    );
  }
}

export default Comment;

Comment.propTypes = {
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
};
