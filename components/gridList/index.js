import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '@material/grid-list/dist/mdc.grid-list.css';

// TODO: Aspect ratio
/**
* Grid Lists
*/
const GridList = ({ children, headerCaption }) => {
    const childProps = children.map(child =>
      child.props,
    );
    const hasIcon = childProps.filter(child =>
      child.icon,
    ).length > 0;
    const hasSupportText = childProps.filter(child =>
      child.supportText,
    ).length > 0;
    const cx = classNames(
          'mdc-grid-list',
        {
            'mdc-grid-list--header-caption': headerCaption,
        }, {
            'mdc-grid-list--twoline-caption': hasSupportText,
        }, {
            'mdc-grid-list--with-icon-align-end': hasIcon,
        },
    );
    return (
        <div className={cx} >
            <ul className="mdc-grid-list__tiles">
                {children}
            </ul>
        </div>
    );
};
GridList.propTypes = {
  /**
  * Grid lists support header caption. You can change the footer caption to be a header caption.
  */
    headerCaption: PropTypes.bool,
    /**
    * Children must be one or more Grid Tile component(s).
    */
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
};
export default GridList;
