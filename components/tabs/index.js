import '@material/tabs/dist/mdc.tabs.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { MDCTabBar } from '@material/tabs';

class TabBar extends Component {
    static propTypes= {
        darkTheme: PropTypes.bool,
        children: PropTypes.any,
    }
    componentDidMount() {
        this.tabBar = new MDCTabBar(this.mainRoot);
    }
    render() {
        const { darkTheme, children } = this.props;
        const childProps = Array.isArray(children) ? children.map(child =>
        child.props) : children.props;
        const childHasIcon = childProps.filter(child => child.icon);
        const childHasIconAndText = childHasIcon.some(child => child.label);
        const baseClass = childHasIcon.length > 0 ? 'mdc-tab-bar' : 'basic-tab-bar';
        const iconAndTextCheck = childHasIconAndText ? 'mdc-tab-bar--icons-with-text' : childHasIcon.length > 0 && 'mdc-tab-bar--icon-tab-bar';
        return (
            <nav ref={(n) => { this.mainRoot = n; }} className={classNames(baseClass, { [`${baseClass}--theme-dark`]: darkTheme }, iconAndTextCheck)}>
                { children }
                <span className="mdc-tab-bar__indicator" />
            </nav>
        );
    }
}

export default TabBar;
