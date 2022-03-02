import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import './CommentForm.css';

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      stars: 0,
      email: '',
      body: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStarsClick = this.handleStarsClick.bind(this);
  }

  handleStarsClick(stars) {
    this.setState({ stars });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { stars, email, body } = this.state;
    const { onCommentSubmit } = this.props;
    onCommentSubmit({
      stars,
      email,
      body,
    });
    this.setState({
      stars: 0,
      email: '',
      body: '',
    });
  }

  render() {
    const { stars, email, body } = this.state;
    return (
      <form className="commentForm" onSubmit={ this.handleSubmit }>
        <div>
          <input
            id="email"
            className="email"
            name="email"
            placeholder="Email"
            type="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </div>
        <Stars handleClick={ this.handleStarsClick } stars={ stars } />
        <div>
          <textarea
            id="body"
            className="body"
            name="body"
            data-testid="product-detail-evaluation"
            value={ body }
            onChange={ this.handleChange }
          />
        </div>
        <input type="submit" value="Enviar" className="button" />
      </form>
    );
  }
}

export default CommentForm;

CommentForm.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};
