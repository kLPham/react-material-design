import '@material/menu/dist/mdc.menu.css';
import '@material/icon-toggle/dist/mdc.icon-toggle.css';
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const IconButton = ({ icon, primary }) =>
    <i
        className={classNames('mdc-icon-toggle', 'material-icons', { 'mdc-theme--text-primary-on-primary': primary })}
        role="button"
    >
        {icon}
    </i>;
IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    primary: PropTypes.bool
};
export default IconButton;
