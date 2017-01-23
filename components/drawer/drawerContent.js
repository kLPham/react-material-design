import React, { PropTypes } from 'react';
// TODO: i'd like to use existing list-item and feed it mdc-temporary-drawer--* classes.

const DrawerContent = ({ children }) =>
    <nav id="icon-with-text-demo" className="mdc-temporary-drawer__content mdc-list">
        {children}
    </nav>;
DrawerContent.PropTypes = {
    children: PropTypes.any.isRequired,
};
export default DrawerContent;
