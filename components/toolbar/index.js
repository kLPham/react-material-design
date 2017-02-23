import React, { PropTypes } from 'react';
import classNames from 'classnames';

import '@material/toolbar/dist/mdc.toolbar.css';

// TODO: consider how to handle mdc-toolbar-fixed-adjust for sibling components
const Toolbar = ({ children, fixed, startElement, title }) =>
    <header className={classNames('mdc-toolbar', { 'mdc-toolbar--fixed': fixed })}>
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
            {startElement}
            <span className="mdc-toolbar__title">{title}</span>
            {children}
        </section>
    </header>;
Toolbar.propTypes = {
    children: PropTypes.any,
    fixed: PropTypes.bool,
    title: PropTypes.string,
};
export default Toolbar;
