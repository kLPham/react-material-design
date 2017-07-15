import '@material/list/dist/mdc.list.css';
import '@material/menu/dist/mdc.menu.css';
import React from 'react';
import PropTypes from 'prop-types';

// TODO: tabIndex
// TODO: What behaviors can menu have? Used as a link (Regular link, or react-router), just pick an item,
const MenuItem = ({ value }) =>
    (<li className="mdc-list-item" role="menuitem" tabIndex="0">
        {value}
    </li>);
MenuItem.propTypes = {
    value: PropTypes.string.isRequired,
};
export default MenuItem;
