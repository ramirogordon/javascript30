import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import './App.scss';
import NavBar from './component/NavBar';
import ClockScreen from './component/Clock/ClockScreen';
import CssVariablesJS from './component/CssVariables/CssVariablesJS';
import ArrayCardio from './component/ArrayCardio/ArrayCardio';
import FlexPanel from './component/FlexPanelGallerry/FlexPanel';

function App() {
  return (
    <div className="full-screen">
      <Router>
        <NavBar />
        <div className="route-component-screen">
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/clock" component={ClockScreen} />
          <Route exact path="/css-variables-with-js" component={CssVariablesJS} />
          <Route exact path="/array-cardio" component={ArrayCardio} />
          <Route exact path="/flex-panel" component={FlexPanel} />
        </div>
      </Router>
    </div>
  );
}

export default App;
