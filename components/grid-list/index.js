import '@material/grid-list/dist/mdc.grid-list.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { MDCGridList } from '@material/grid-list';

// TODO: Aspect ratio
/**
* Grid Lists
*/
class GridList extends Component {
    static propTypes = {
        darkTheme: PropTypes.bool,
      /**
      * Grid lists support header caption. You can change the footer caption to be a header caption.
      */
        headerCaption: PropTypes.bool,
        /**
        * Children must be more than one Grid Tile components.
        */
        children: PropTypes.arrayOf(PropTypes.element).isRequired,
    };
    componentDidMount() {
        this.gridList = new MDCGridList(this.mainRoot);
    }
    render() {
        const { children, headerCaption, darkTheme } = this.props;
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
              {'mdc-grid-list--theme-dark': darkTheme},
            {
                'mdc-grid-list--header-caption': headerCaption,
            }, {
                'mdc-grid-list--twoline-caption': hasSupportText,
            }, {
                'mdc-grid-list--with-icon-align-end': hasIcon,
            },
        );
        return (
            <div ref={(d) => { this.mainRoot = d; }} className={cx}>
                <ul className="mdc-grid-list__tiles">
                    {children}
                </ul>
            </div>
        );
    }
}
export default GridList;
