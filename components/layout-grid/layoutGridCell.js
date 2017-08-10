import '@material/layout-grid/dist/mdc.layout-grid.css';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

// TODO: Reordering
/** Layout Grid Cell */
const LayoutGridCell = ({ alignment, children, columnSpan, screenSize }) =>
    (
        <div className={classNames(
            'mdc-layout-grid__cell',
            { [`mdc-layout-grid__cell--align-${alignment}`]: alignment },
            { [`mdc-layout-grid__cell--span-${columnSpan}`]: columnSpan },
            { [`mdc-layout-grid__cell--span-${columnSpan}-${screenSize}`]: columnSpan && screenSize },
        )}
        >
            {children}
        </div>);
LayoutGridCell.propTypes = {
    /**
    * Items are defined to stretch, by default, taking up the height of their corresponding row. You can switch to a different behavior by using one of top, middle or bottom.
    */
    alignment: PropTypes.oneOf(['top', 'middle', 'bottom']),
    children: PropTypes.any,
    /**
    * You can set the cells span by a column number between 1 and 12.
    */
    columnSpan: PropTypes.number,
    /**
    * desktop, tablet or phone
    */
    screenSize: PropTypes.oneOf(['desktop', 'tablet', 'phone']),
};
export default LayoutGridCell;
