// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { PlanetCollection } from './containers/PlanetsCollection/PlanetCollection';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={PlanetCollection} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
