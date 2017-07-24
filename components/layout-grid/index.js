import '@material/layout-grid/dist/mdc.layout-grid.css';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const LayoutGrid = ({ children, nested }) =>
    (nested ? <div className={classNames('mdc-layout-grid__inner')}>
        {children}
    </div>
        : <div className="mdc-layout-grid">
            <div className={classNames('mdc-layout-grid__inner')}>
                {children}
            </div>
        </div>
  );
LayoutGrid.propTypes = {
    children: PropTypes.any.isRequired,
    nested: PropTypes.bool,
};
export default LayoutGrid;
