import React, { PropTypes } from 'react';
import '@material/drawer/dist/mdc.drawer.css';
import { drawerHeadercssClasses } from '../classes';
import classNames from 'classnames';

// TODO: what do you want header to be able to be?
const DrawerHeader = ({ children, primary }) =>
    <header className="mdc-temporary-drawer__header">
        <div className={classNames('mdc-temporary-drawer__header-content', primary && drawerHeadercssClasses.primary)}>
            {children}
        </div>
    </header>;

DrawerHeader.propTypes = {
    children: PropTypes.any.isRequired,
    primary: PropTypes.bool,
};
export default DrawerHeader;
