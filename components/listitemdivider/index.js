import React, { PropTypes } from 'react';

const ListItemDivider = ({ inset }) => <li role="separator" className={`mdc-list-divider ${inset && 'mdc-list-divider--inset'}`} />;
ListItemDivider.propTypes = {
    inset: PropTypes.bool,
};
export default ListItemDivider;
