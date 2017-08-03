import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '@material/drawer/dist/mdc.drawer.css';

// TODO: what do you want header to be able to be?
/** Drawer Header*/
const DrawerHeader = ({ children, primary, type }) =>
    (<header className={`mdc-${type}-drawer__header`}>
        <div className={classNames(`mdc-${type}-drawer__header-content`, { 'mdc-theme--primary-bg mdc-theme--text-primary-on-primary': primary })}>
            {children}
        </div>
    </header>);

DrawerHeader.propTypes = {
    children: PropTypes.any.isRequired,
    primary: PropTypes.bool,
    type: PropTypes.oneOf(['temporary', 'persistent']),
};
DrawerHeader.defaultProps = {
    type: 'temporary',
};
export default DrawerHeader;
