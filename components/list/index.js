import React, { PropTypes } from 'react';
import '@material/list/dist/mdc.list.css';
import classNames from 'classnames';
import ListItem from './ListItem';
import { listcssClasses } from '../classes';

// TODO: Two-line lists
// TODO: List Groups
const cx = classNames.bind(listcssClasses);

const List = ({ type, children }) =>
    <ul className={cx('mdc-list', listcssClasses[type])}>
        {children}
    </ul>;
List.propTypes = {
    type: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.instanceOf(ListItem),
    ]).isRequired,
};
export default List;
