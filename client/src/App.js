import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Create from './pages/Create'


function App() {
  return (
      <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/create' component={Create} />
      </Router>
  );
}

export default App;
