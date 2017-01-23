import React, { PropTypes } from 'react';
// TODO: I don't like two drawers. if type = blah then?

const Drawer = ({ children }) =>
    <nav className="mdc-permanent-drawer mdc-typography">
        {children}
    </nav>;
export default Drawer;
