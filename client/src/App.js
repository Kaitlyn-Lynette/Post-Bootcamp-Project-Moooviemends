import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Create from './pages/Create';
import Search from './pages/Search';


function App() {
  return (
      <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/search' component={Search} />
      </Router>
  );
}

export default App;
