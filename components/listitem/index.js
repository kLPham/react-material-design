import React, { PropTypes } from 'react';

// TODO: alt from avatarUrl
// TODO: When the list has an avatar but no leftAvatarUrl is provided, make sure that the text aligns with other li that do have an avatar.
// TODO: test with react-router
const ListItem = ({ value, icon, leftAvatarUrl, rightIcon, rightTitle }) =>
    <li className="mdc-list-item">
        {icon && <i className="mdc-list-item__start-detail material-icons" aria-hidden="true">{icon}</i>}
        {leftAvatarUrl && <img className="mdc-list-item__start-detail" src={leftAvatarUrl} width="56" height="56" role="presentation" />}
        {value}
        {rightIcon && <a className="mdc-list-item__end-detail material-icons" aria-label={rightTitle} title={rightTitle}>
            {rightIcon}
        </a>}

    </li>;

ListItem.propTypes = {
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    rightIcon: PropTypes.string,
    leftAvatarUrl: PropTypes.string,
    rightTitle: PropTypes.string,
};
export default ListItem;
