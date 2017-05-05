import React from 'react';
import '@material/drawer/dist/mdc.drawer.css';
// TODO: I don't like two drawers. if type = blah then?

const Drawer = ({ children }) =>
    <aside className="mdc-permanent-drawer mdc-typography">
        {children}
    </aside>;
export default Drawer;
