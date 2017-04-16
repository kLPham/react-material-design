import React from 'react';
import PropTypes from 'prop-types';
import '@material/drawer/dist/mdc.drawer.css';

// TODO: HOC: I'd like to use existing list-item and feed it mdc-temporary-drawer--* classes.

const DrawerContent = ({ children }) =>
    <nav id="icon-with-text-demo" className="mdc-permanent-drawer__content mdc-list">
        {children}
    </nav>;
DrawerContent.PropTypes = {
    children: PropTypes.any.isRequired,
};
export default DrawerContent;
