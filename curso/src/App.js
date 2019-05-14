import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
