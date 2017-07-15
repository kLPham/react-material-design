import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import { layoutGridCellcssClasses } from '../classes';

// TODO: Column spans for specific screen sizes.
// TODO: Reordering
const cx = classNames.bind(layoutGridCellcssClasses);
const LayoutGridCell = ({ alignment, children, span }) =>
    <div className={cx('mdc-layout-grid__cell', layoutGridCellcssClasses[span], layoutGridCellcssClasses[alignment])}>{children}</div>;
LayoutGridCell.propTypes = {
    alignment: PropTypes.string,
    span: PropTypes.number,
};
export default LayoutGridCell;
