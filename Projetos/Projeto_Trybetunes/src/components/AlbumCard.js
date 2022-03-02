import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AlbumCard.css';

class AlbumCard extends Component {
  render() {
    const {
      alb: {
        collectionId,
        artistName,
        collectionName,
        artworkUrl100,
      },
    } = this.props;
    const path = `/album/${collectionId}`;
    return (
      <div className="albumArtist">
        <Link to={ path } data-testid={ `link-to-album-${collectionId}` }>
          <img
            className="imageAlbum"
            src={ artworkUrl100 }
            alt={ collectionName }
          />
          <p className="artistName">{ artistName }</p>
          <p className="collectionName">{ collectionName }</p>
        </Link>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  alb: PropTypes.shape({
    collectionId: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumCard;
