import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const rootEl = document.getElementById('root');

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        rootEl,
    );
};
render(App);
// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default;
        render(NewApp);
    });
}
