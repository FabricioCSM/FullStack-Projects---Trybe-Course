import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
    this.onCommentSubmit = this.onCommentSubmit.bind(this);
  }

  componentDidMount() {
    this.loadComments();
  }

  onCommentSubmit(comment) {
    const { comments } = this.state;
    this.setState({ comments: [...comments, comment] }, this.saveComments);
  }

  saveComments() {
    const { productId } = this.props;
    const { comments } = this.state;
    localStorage.setItem(productId, JSON.stringify(comments));
  }

  loadComments() {
    const { productId } = this.props;
    const comments = localStorage.getItem(productId);
    if (comments) {
      this.setState({ comments: JSON.parse(comments) });
    }
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="commentBox">
        <h3 className="commentTitle">Comentários</h3>
        <CommentForm onCommentSubmit={ this.onCommentSubmit } />
        <CommentList comments={ comments } />
      </div>
    );
  }
}

export default CommentBox;

CommentBox.propTypes = {
  productId: PropTypes.string.isRequired,
};
