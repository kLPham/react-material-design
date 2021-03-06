import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import '@material/typography/dist/mdc.typography.css';
import App from './App';
import './sass/_theme.scss';
import './sass/component-playground.scss';

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
if (module.hot) module.hot.accept('./App', () => render(App));
