import React, { PropTypes } from 'react';

// TODO: what do you want header to be able to be?
const DrawerHeader = ({ children }) =>
    <header className="mdc-temporary-drawer__header">
        <div className="mdc-temporary-drawer__header-content">
            {children}
        </div>
    </header>;
DrawerHeader.propTypes = {
    children: PropTypes.any.isRequired,
};
export default DrawerHeader;
