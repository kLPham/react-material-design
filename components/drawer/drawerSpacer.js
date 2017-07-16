import React from 'react';
import PropTypes from 'prop-types';
import '@material/drawer/dist/mdc.drawer.css';

const DrawerSpacer = ({ children, type }) =>
    (<div className={`mdc-${type}-drawer__toolbar-spacer`}>
        {children}
    </div>);
DrawerSpacer.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(['permanent', 'temporary']),
};
DrawerSpacer.defaultProps = {
    type: 'temporary',
};
export default DrawerSpacer;
