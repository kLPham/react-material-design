import React from 'react';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import PropTypes from 'prop-types';

const LayoutGrid = ({ children }) =>
    <div className="mdc-layout-grid">{children}</div>;
LayoutGrid.propTypes = {
    children: PropTypes.element.isRequired,
};
export default LayoutGrid;
