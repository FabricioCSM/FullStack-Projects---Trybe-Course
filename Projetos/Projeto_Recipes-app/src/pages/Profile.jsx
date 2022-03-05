import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Profile() {
  const userInfo = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();

  const handleLogout = () => {
    history.push('/');
    localStorage.clear();
  };

  return (
    <main>
      <Header />

      {console.log(userInfo.email)}
      <p data-testid="profile-email">{ userInfo.email }</p>

      <div className="d-flex flex-column px-5">
        <Button
          className="mt-3"
          variant="primary"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </Button>

        <Button
          className="mt-3"
          variant="primary"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </Button>

        <Button
          onClick={ handleLogout }
          className="mt-3"
          variant="primary"
          data-testid="profile-logout-btn"
        >
          Logout
        </Button>
      </div>
      <Footer />
    </main>
  );
}

export default Profile;
