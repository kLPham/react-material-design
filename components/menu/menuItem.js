import '@material/list/dist/mdc.list.css';
import '@material/menu/dist/mdc.menu.css';
import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

// TODO: tabIndex
// TODO: What behaviors can menu have? Used as a link (Regular link, or react-router), just pick an item,
const MenuItem = ({ value, disable }) => {
    const id = v4();
    return (
        <li id={`mdc-list-item--${id}`} aria-disabled={disable} className="mdc-list-item" role="menuitem" tabIndex="0">
            {value}
        </li>
    );
};
MenuItem.propTypes = {
    value: PropTypes.string.isRequired,
    disable: PropTypes.bool
};
export default MenuItem;
