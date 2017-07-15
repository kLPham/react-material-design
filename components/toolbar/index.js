import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '@material/toolbar/dist/mdc.toolbar.css';
import ToolbarRow from './toolbarRow';

// TODO: consider how to handle mdc-toolbar-fixed-adjust for sibling components
const Toolbar = ({ children, fixed, ...rest }) =>
    (<header className={classNames('mdc-toolbar', { 'mdc-toolbar--fixed': fixed })}>
        <ToolbarRow {...rest} />
        {children}
    </header>);
Toolbar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    fixed: PropTypes.bool,
    title: PropTypes.string,
    centerElements: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    leftElements: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    rightElements: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
};
export default Toolbar;
