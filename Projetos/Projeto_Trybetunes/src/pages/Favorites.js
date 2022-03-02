import React, { Component } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import './Favorites.css';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      favMusics: [],
    };

    this.getFavSongs = this.getFavSongs.bind(this);
  }

  async componentDidMount() {
    const favoriteSongs = await getFavoriteSongs();
    this.getFavSongs(favoriteSongs);
  }

  getFavSongs(data) {
    this.setState({
      favMusics: data,
    });
  }

  render() {
    const {
      state: {
        favMusics,
      },
    } = this;
    return (
      <div data-testid="page-favorites">
        <Header />
        <div className="favoriteSongs">

          <h2 className="favoriteSongPageTitle">Músicas Favoritadas</h2>

          <div className="songs">
            {favMusics.map((music, index) => (
              <div key={ index } className="albumArtist">
                <img
                  className="imageAlbum"
                  src={ music.artworkUrl100 }
                  alt={ music.collectionName }
                />
                <p className="artistName">{ music.trackName }</p>
                <audio src={ music.previewUrl } controls>
                  <track kind="captions" />
                </audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
