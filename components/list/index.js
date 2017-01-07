import React, { PropTypes } from 'react';
import '@material/list/dist/mdc.list.css';
import ListItem from '../listitem';

// TODO: Two-line lists
const cssClasses = {
    dense: 'mdc-list--dense',
    avatar: 'mdc-list--avatar-list',
};

const List = ({ type, children }) =>
    <div className={`mdc-list ${cssClasses[type]}`}>
        {children}
    </div>;
List.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.instanceOf(ListItem),
    ]).isRequired,
};
export default List;
