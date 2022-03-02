import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <p>profile</p>
      </div>
    );
  }
}

export default Profile;
