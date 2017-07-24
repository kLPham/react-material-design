import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';

const history = createHistory();

const App = () => (
    <Router history={history}>
        <Layout location={history.location.pathname} />
    </Router>
);
export default App;
