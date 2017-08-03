import React from 'react';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import Layout from './Layout';

ReactGA.initialize('UA-104006670-1');
const history = createHistory();

const logPageView = (location) => {
    if (process.env.NODE_ENV === 'production') {
        ReactGA.set({ page: location.pathname + location.search });
        ReactGA.pageview(location.pathname + location.search);
    } else {
        console.log('=====GA=====>', location.pathname, location.search);
    }
};
history.listen((location) => {
    logPageView(location);
});
const App = () => (
    <Router history={history}>
        <Layout />
    </Router>
);
export default App;
