import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
* List Divider
*/
const ListDivider = ({ inset }) => <li role="separator" className={classNames('mdc-list-divider', { 'mdc-list-divider--inset': inset })} />;
ListDivider.propTypes = {
  /**
  * Inset dividers are useful when working with lists which have start details.
  */
    inset: PropTypes.bool,
};
export default ListDivider;
