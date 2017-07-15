import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '@material/drawer/dist/mdc.drawer.css';
import { drawerHeadercssClasses } from '../classes';

// TODO: what do you want header to be able to be?
const DrawerHeader = ({ children, primary }) =>
    (<header className="mdc-persistent-drawer__header">
        <div className={classNames('mdc-persistent-drawer__header-content', primary && drawerHeadercssClasses.primary)}>
            {children}
        </div>
    </header>);

DrawerHeader.propTypes = {
    children: PropTypes.any.isRequired,
    primary: PropTypes.bool,
};
export default DrawerHeader;
