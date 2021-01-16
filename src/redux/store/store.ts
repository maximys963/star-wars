import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { planetsReducer } from '../planets/planetsReducer';
import { alertReducer } from '../alert/alertReducer';

const rootReducer = combineReducers({
  planets: planetsReducer,
  alert: alertReducer,
});

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>
