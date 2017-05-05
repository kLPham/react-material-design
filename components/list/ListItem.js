import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@material/list/dist/mdc.list.css';
import '@material/drawer/dist/mdc.drawer.css';

// TODO: alt from avatarUrl
// TODO: When the list has an avatar but no leftAvatarUrl is provided, make sure that the text aligns with other li that do have an avatar.
// TODO: activeClassName isn't working.
const ListItem = ({ to, value, icon, leftAvatarUrl, rightIcon, rightTitle }) => {
    if (to) {
        return (<NavLink activeClassName="mdc-permanent-drawer--selected" className="mdc-list-item" to={to}>
            {icon && <i className="mdc-list-item__start-detail material-icons" aria-hidden>{icon}</i>}
            {leftAvatarUrl && <img className="mdc-list-item__start-detail" src={leftAvatarUrl} width="56" height="56" alt="" />}
            {value}
        </NavLink>);
    }
    return (<li className="mdc-list-item">
        {icon && <i className="mdc-list-item__start-detail material-icons" aria-hidden>{icon}</i>}
        {leftAvatarUrl && <img className="mdc-list-item__start-detail" src={leftAvatarUrl} width="56" height="56" alt="" />}
        {value}
        {rightIcon && <a className="mdc-list-item__end-detail material-icons" aria-label={rightTitle} title={rightTitle}>
            {rightIcon}
        </a>}
    </li>);
};

ListItem.propTypes = {
    icon: PropTypes.string,
    leftAvatarUrl: PropTypes.string,
    rightIcon: PropTypes.string,
    rightTitle: PropTypes.string,
    value: PropTypes.string.isRequired,
};

export default ListItem;
