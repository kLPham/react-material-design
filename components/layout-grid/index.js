import React from 'react';
import '@material/layout-grid/dist/mdc.layout-grid.css';

const LayoutGrid = ({ children }) =>
    <div className="mdc-layout-grid">{children}</div>;
export default LayoutGrid;
