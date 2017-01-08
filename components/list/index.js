import React, { PropTypes } from 'react';
import '@material/list/dist/mdc.list.css';
import classNames from 'classnames';
import ListItem from '../listitem';

// TODO: Two-line lists
const cssClasses = {
    dense: 'mdc-list--dense',
    avatar: 'mdc-list--avatar-list',
};
const cx = classNames.bind(cssClasses);

const List = ({ type, children }) =>
    <div className={cx('mdc-list', cssClasses[type])}>
        {children}
    </div>;
List.propTypes = {
    type: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.instanceOf(ListItem),
    ]).isRequired,
};
export default List;
