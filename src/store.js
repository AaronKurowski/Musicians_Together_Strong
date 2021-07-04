import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

//initial app state
const initialState = {};

//middleware
const middleware = [thunk];

//...middleware (spread operator) because we want it to be added on to the middleware array
const store = createStore(
    rootReducer, 
    initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware)
        )
    );

export default store;
