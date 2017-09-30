import React from 'react';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import Layout from './Layout';

const logPageView = (location) => {
    if (process.env.NODE_ENV === 'production') {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    } else {
        console.log('=====GA=====>', location.pathname, location.search);
    }
};

const initGA = (history) => {
    ReactGA.initialize('UA-104006670-1');
    logPageView(history.location);
    history.listen(logPageView);
};

const history = createHistory();

initGA(history);

const App = () => (
    <Router history={history}>
        <Layout />
    </Router>
);
export default App;
