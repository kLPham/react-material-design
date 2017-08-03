import React from 'react';
import PropTypes from 'prop-types';
import '@material/drawer/dist/mdc.drawer.css';

// TODO: HOC: I'd like to use existing list-item and feed it mdc-temporary-drawer--* classes.
/** Drawer Content*/
const DrawerContent = ({ children, type }) =>
    (<nav id="icon-with-text-demo" className={`mdc-${type}-drawer__content`}>
        {children}
    </nav>);
DrawerContent.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['temporary', 'permanent', 'persistent']),
};
DrawerContent.defaultProps = {
    type: 'temporary',
};
export default DrawerContent;
