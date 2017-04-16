import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '@material/toolbar/dist/mdc.toolbar.css';

// TODO: consider how to handle mdc-toolbar-fixed-adjust for sibling components
// TODO: multiple elements are stacked vertically.
const Toolbar = ({ children, fixed, endElements, startElements, title }) =>
    <header className={classNames('mdc-toolbar', { 'mdc-toolbar--fixed': fixed })}>
        <div className="mdc-toolbar__row">
            <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                {startElements}
                <span className="mdc-toolbar__title">{title}</span>
            </section>
            <section className="mdc-toolbar__section">
                {children}
            </section>
            <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                {endElements}
            </section>
        </div>
    </header>;
Toolbar.propTypes = {
    children: PropTypes.any,
    fixed: PropTypes.bool,
    title: PropTypes.string,
    startElements: PropTypes.any,
    endElements: PropTypes.any,
};
export default Toolbar;
