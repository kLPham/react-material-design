import React from 'react';
import PropTypes from 'prop-types';
import '@material/drawer/dist/mdc.drawer.css';

const DrawerSpacer = ({ children }) =>
    <div className="mdc-temporary-drawer__toolbar-spacer">
        {children}
    </div>;
DrawerSpacer.propTypes = {
    children: PropTypes.any,
};
export default DrawerSpacer;
