import React, { PropTypes } from 'react';
import classNames from 'classnames';

const ListItemDivider = ({ inset }) => <li role="separator" className={classNames('mdc-list-divider', { 'mdc-list-divider--inset': inset })} />;
ListItemDivider.propTypes = {
    inset: PropTypes.bool,
};
export default ListItemDivider;
