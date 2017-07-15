import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '@material/list/dist/mdc.list.css';
import '@material/drawer/dist/mdc.drawer.css';

// TODO: alt from avatarUrl
// TODO: When the list has an avatar but no avatarSrc is provided, make sure that the text aligns with other li that do have an avatar.
// TODO: activeClassName isn't working.
/**
* List Item
*/
const ListItem = ({ avatarSrc, icon, iconRight, rightTitle, secondaryValue, to, value }) => {
    if (to) {
        return (<NavLink activeClassName="mdc-permanent-drawer--selected" className="mdc-list-item" to={to}>
            {icon && <i className="mdc-list-item__start-detail material-icons" aria-hidden>{icon}</i>}
            {avatarSrc && <img className="mdc-list-item__start-detail" src={avatarSrc} width="56" height="56" alt="" />}
            {value}
        </NavLink>);
    }
    return (<li className="mdc-list-item">
        {icon && <i className="mdc-list-item__start-detail material-icons" aria-hidden>{icon}</i>}
        {avatarSrc && <img className="mdc-list-item__start-detail" src={avatarSrc} width="56" height="56" alt="" />}
        {secondaryValue ?
            <span className="mdc-list-item__text">
                {value}
                <span className="mdc-list-item__text__secondary">
                    {secondaryValue}
                </span>
            </span> : value}
        {iconRight && <a className="mdc-list-item__end-detail material-icons" aria-label={rightTitle} title={rightTitle}>
            {iconRight}
        </a>}
    </li>);
};

ListItem.propTypes = {
  /**
  * Source URL for avatar image. Will display to the left of text value.
  */
    avatarSrc: PropTypes.string,
    icon: PropTypes.string,
    iconRight: PropTypes.string,
    rightTitle: PropTypes.string,
    /**
    * Secondary text value for two-line list item.
    */
    secondaryValue: PropTypes.string,
    to: PropTypes.string,
    value: PropTypes.string.isRequired,
};

export default ListItem;
