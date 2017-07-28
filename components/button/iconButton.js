import '@material/menu/dist/mdc.menu.css';
import '@material/icon-toggle/dist/mdc.icon-toggle.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const IconButton = ({ icon, primary, onClick, darkTheme }) =>
    (<i
        className={classNames('mdc-icon-toggle', { 'mdc-icon-toggle--theme-dark': darkTheme }, 'material-icons', { 'mdc-theme--text-primary-on-primary': primary })}
        role="button"
        onClick={onClick}
    >
        {icon}
    </i>);
IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    primary: PropTypes.bool,
};
export default IconButton;
