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
      <Alert autoHideDuration={2000} />
    </div>
  );
}

export default App;
