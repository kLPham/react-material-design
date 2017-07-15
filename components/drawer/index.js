import React from 'react';
import '@material/drawer/dist/mdc.drawer.css';
import PropTypes from 'prop-types';
// TODO: I don't like two drawers. if type = blah then?

const Drawer = ({ children }) =>
    (<aside className="mdc-permanent-drawer mdc-typography">
        {children}
    </aside>);
Drawer.propTypes = {
    children: PropTypes.any,
};
export default Drawer;
