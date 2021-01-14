import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { mainReducer } from '../reducers/mainReducer';

const rootReducer = combineReducers({
    mainReducer,
});

const initialState = {};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
