import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
