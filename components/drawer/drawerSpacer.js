import React, { PropTypes } from 'react';
import '@material/drawer/dist/mdc.drawer.css';

const DrawerSpacer = ({ children }) =>
    <div className="mdc-temporary-drawer__toolbar-spacer">
        {children}
    </div>;
DrawerSpacer.propTypes = {
    children: PropTypes.any,
};
export default DrawerSpacer;
