import React from 'react';
import '@material/tabs/dist/mdc.tabs.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// TODO: Logic to handle only one child.
const Tab = ({ active, label, to, icon }) => {
    const hasIconAndText = label && icon;
    return (
        <a className={classNames('mdc-tab', { 'mdc-tab--active': active }, { 'mdc-tab--with-icon-and-text': hasIconAndText })} href={to}>
            {icon && <i className="material-icons mdc-tab__icon" aria-label={icon}>{icon}</i>}
            {hasIconAndText ? <span className="mdc-tab__icon-text">{label}</span> : label}

        </a>
    );
};
Tab.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.string,
};
export default Tab;
