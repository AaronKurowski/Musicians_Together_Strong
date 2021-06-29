import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store.js';
import { Provider } from 'react-redux';



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <StrictMode>
                <App />
            </StrictMode>
        </Router>
    </Provider>,
    document.getElementById('root')
);
