import '@material/list/dist/mdc.list.css';
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { listcssClasses } from '../classes';
import ListItem from './ListItem';

// TODO: List Groups

const cx = classNames.bind(listcssClasses);
const processType = (children, filterBy) => {
    const filteredResult = Array.isArray(children) ? children.filter(child =>
      child[filterBy]) : children[filterBy];
    return (typeof filteredResult !== 'undefined' && filteredResult.length > 0);
};
/**
* List
*/
const List = ({ children, dense }) => {
    const childProps = Array.isArray(children) ? children.map(child =>
      child.props) : children.props;
    const isTwoLineList = processType(childProps, 'secondaryValue');
    const isAvatarList = processType(childProps, 'avatarSrc');

    return (
        <ul
            className={cx('mdc-list', { 'mdc-list--two-line': isTwoLineList },
                { 'mdc-list--avatar-list': isAvatarList },
                { 'mdc-list--dense': dense })}
        >
            {children}
        </ul>
    );
};
List.propTypes = {
  /**
  * One or more <ListItem />
  */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.instanceOf(ListItem),
    ]).isRequired,
    /**
    * Use dense to make Lists more compact.
    */
    dense: PropTypes.bool,
};
export default List;
