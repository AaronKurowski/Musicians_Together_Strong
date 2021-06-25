import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <StrictMode>
            <App />
        </StrictMode>
    </Router>,
    document.getElementById('root')
);
