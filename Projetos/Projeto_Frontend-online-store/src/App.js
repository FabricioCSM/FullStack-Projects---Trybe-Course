import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './MyRoutes';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
