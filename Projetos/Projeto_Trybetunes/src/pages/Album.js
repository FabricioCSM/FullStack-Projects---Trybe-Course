import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicsCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      albumFetch: [],
      loading: false,
      artist: '',
      albumName: '',
    };

    this.getAlbumDetails = this.getAlbumDetails.bind(this);
  }

  componentDidMount() {
    this.getAlbumDetails();
  }

  getAlbumDetails() {
    const { match: {
      params: {
        id,
      },
    } } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      const musics = await getMusics(id);
      this.setState({
        albumFetch: musics.slice(1),
        artist: musics[0].artistName,
        albumName: musics[0].collectionName,
        loading: false,
      });
    });
  }

  render() {
    const { albumFetch, artist, albumName, loading } = this.state;
    return (
      <div data-testid="page-album">
        <div>
          <Header />
          <h2 data-testid="artist-name">{artist}</h2>
          <h3 data-testid="album-name">{albumName}</h3>
          { loading ? <Loading />
            : (
              albumFetch
                .map((music) => (
                  <MusicCard key={ music.trackId } musicsList={ music } />))
            )}
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
