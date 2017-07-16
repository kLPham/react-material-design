import React from 'react';
import '@material/drawer/dist/mdc.drawer.css';
import PropTypes from 'prop-types';
// TODO: I don't like two drawers. if type = blah then?

const Drawer = ({ children, type }) =>
    (<nav className={`mdc-${type}-drawer mdc-typography`}>
        {children}
    </nav>);
Drawer.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
};
Drawer.defaultProps = {
    type: 'temporary',
};
export default Drawer;
