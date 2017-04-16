import '@material/list/dist/mdc.list.css';
import classNames from 'classnames';
import ListItem from './ListItem';
import React from 'react';
import PropTypes from 'prop-types';
import { listcssClasses } from '../classes';

// TODO: Two-line lists
// TODO: List Groups
const cx = classNames.bind(listcssClasses);

const List = ({ children, type }) =>
    <ul className={cx('mdc-list', listcssClasses[type])}>
        {children}
    </ul>;
List.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.instanceOf(ListItem),
    ]).isRequired,
    type: PropTypes.string,
};
export default List;
