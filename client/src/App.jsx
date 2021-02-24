import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from './app/routes';

const App = () => {
  //TODO add auth here
  return (
    <Router>
      <AppRoute />
    </Router>
  );
};

export default App;
