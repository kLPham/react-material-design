import '@material/layout-grid/dist/mdc.layout-grid.css';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

/** Layout Grid */
const LayoutGrid = ({ children, nested }) => {
    const inner = (<div className={classNames('mdc-layout-grid__inner')}>
        {children}
    </div>);
    if (nested) {
        return (inner);
    }
    return <div className="mdc-layout-grid">{inner}</div>;
};
LayoutGrid.propTypes = {
    children: PropTypes.any.isRequired,
    nested: PropTypes.bool,
};
export default LayoutGrid;
