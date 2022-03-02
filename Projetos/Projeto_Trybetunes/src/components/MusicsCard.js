import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      checked: false,
      favSongs: [],
    };

    this.addFavoriteSong = this.addFavoriteSong.bind(this);
    this.favoriteSongs = this.favoriteSongs.bind(this);
    this.getSongsFavorited = this.getSongsFavorited.bind(this);
  }

  componentDidMount() {
    this.getSongsFavorited();
  }

  async getSongsFavorited() {
    const favoritedSongs = await getFavoriteSongs();
    this.setState({
      favSongs: favoritedSongs,
    });
    this.favoriteSongs();
  }

  async favoriteSongs() {
    const { favSongs } = this.state;
    const { musicsList } = this.props;
    if (JSON.stringify(favSongs).includes(JSON.stringify(musicsList))) {
      this.setState({
        checked: true,
      });
    }
  }

  async addFavoriteSong({ target }) {
    const { musicsList } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      await addSong(musicsList);
      this.setState({
        loading: false,
        checked: !target.checked,
      });
    });
  }

  render() {
    const {
      props: {
        musicsList: {
          trackName,
          previewUrl,
          trackId,
        },
      },
      state: {
        checked,
        loading,
      },
    } = this;
    return (
      <div>
        { loading ? <Loading />
          : (
            <ul>
              <li>{ trackName }</li>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
              </audio>
              <label htmlFor="favorite">
                Favorito
                <input
                  data-testid={ `checkbox-music-${trackId}` }
                  name="favorite"
                  type="checkbox"
                  checked={ checked }
                  onChange={ this.addFavoriteSong }
                />
              </label>
            </ul>
          )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicsList: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
};

export default MusicCard;
