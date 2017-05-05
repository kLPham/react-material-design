import React from 'react';
import classNames from 'classnames';
import { layoutGridCellcssClasses } from '../classes';
import '@material/layout-grid/dist/mdc.layout-grid.css';

// TODO: Column spans for specific screen sizes.
// TODO: Reordering
const cx = classNames.bind(layoutGridCellcssClasses);
const LayoutGridCell = ({ alignment, children, span }) =>
    <div className={cx('mdc-layout-grid__cell', layoutGridCellcssClasses[span], layoutGridCellcssClasses[alignment])}>{children}</div>;
export default LayoutGridCell;
