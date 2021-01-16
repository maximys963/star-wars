// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Alert } from './components/Alert/Alert';
import { PlanetCollection } from './containers/PlanetsCollection/PlanetCollection';
import { PlanetDetails } from './containers/PlanetDetails/PlanetDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={PlanetCollection} />
          <Route exact path="/planet/:name" component={PlanetDetails} />
        </Switch>
      </BrowserRouter>
      <Alert />
    </div>
  );
}

export default App;
