import React, { PropTypes } from 'react';
import '@material/list/dist/mdc.list.css';
import '@material/menu/dist/mdc.menu.css';

// TODO: Handle tabIndex
const MenuItem = ({ value }) =>
    <li className="mdc-list-item" role="menuitem" tabIndex="0">
        {value}
    </li>;
MenuItem.propTypes = {
    value: PropTypes.string.isRequired,
};
export default MenuItem;
