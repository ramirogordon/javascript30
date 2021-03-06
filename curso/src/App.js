import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import './App.scss';
import NavBar from './component/NavBar';
import ClockScreen from './component/Clock/ClockScreen';
import CssVariablesJS from './component/CssVariables/CssVariablesJS';
import ArrayCardio from './component/ArrayCardio/ArrayCardio';
import FlexPanel from './component/FlexPanelGallerry/FlexPanel';
import TypeAhead from './component/TypeAhead/TypeAhead';
import ArrayCardio02 from './component/ArrayCardio02/ArrayCardio02';
import Canvas from './component/Canvas/Canvas';
import MultipleCheckboxes from './component/CheckMultipleCheckboxes/MultipleCheckboxes';
import VideoPlayer from './component/VideoPlayer/VideoPlayer';
import KonamiCode from './component/KonamiCode/KonamiCode';
import SlideOnScroll from './component/SlideScroll/SlideOnScroll';
import LocalStorage from './component/LocalStorage/LocalStorage';
import ShadowMouse from './component/ShadowMouse/ShadowMouse';
import Sorting from './component/SortingBandNames/Sorting';

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
          <Route exact path="/type-ahead" component={TypeAhead} />
          <Route exact path="/array-cardio-02" component={ArrayCardio02} />
          <Route exact path="/canvas" component={Canvas} />
          <Route exact path="/check-multiple-checkboxes" component={MultipleCheckboxes} />
          <Route exact path="/video-player" component={VideoPlayer} />
          <Route exact path="/konami-code" component={KonamiCode} />
          <Route exact path="/slide-scroll" component={SlideOnScroll} />
          <Route exact path="/local-storage" component={LocalStorage} />
          <Route exact path="/shadow-mouse" component={ShadowMouse} />
          <Route exact path="/sorting" component={Sorting} />
        </div>
      </Router>
    </div>
  );
}

export default App;
