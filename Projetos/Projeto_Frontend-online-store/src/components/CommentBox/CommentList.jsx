import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentList.css';

class CommentList extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <div className="commentList">
        { comments.map((comment, index) => (
          <Comment
            key={ index }
            email={ comment.email }
            stars={ comment.stars }
            body={ comment.body }
          />
        )) }
      </div>
    );
  }
}

export default CommentList;

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
