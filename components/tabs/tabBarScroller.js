import React, { Component } from 'react';
import classNames from 'classnames';
import '@material/tabs/dist/mdc.tabs.css';
import PropTypes from 'prop-types';
import { MDCTabBarScroller } from '@material/tabs';

class TabBarScroller extends Component {
    static propTypes = {
        children: PropTypes.any,
        darkTheme: PropTypes.bool,
    }
    componentDidMount() {
        this.tabBarScroller = new MDCTabBarScroller(this.mainRoot);
    }
    render() {
        const { children, darkTheme } = this.props;
        return (
            <div id="my-tab-bar-scroller" ref={(d) => { this.mainRoot = d; }} className={classNames('mdc-tab-bar-scroller', { 'mdc-tab-bar-scroller--theme-dark': darkTheme })}>
                <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--back">
                    <a className="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll back button">
                      navigate_before
                  </a>
                </div>
                <div className="mdc-tab-bar-scroller__scroll-frame">
                    <nav id="my-scrollable-tab-bar" className={classNames('mdc-tab-bar mdc-tab-bar-scroller__scroll-frame__tabs', { 'mdc-tab-bar--theme-dark': darkTheme })}>
                        <a className="mdc-tab mdc-tab--active" href="#one">Item One</a>
                        <a className="mdc-tab" href="#two">Item Two</a>
                        <a className="mdc-tab" href="#three">Item Three</a>
                        <a className="mdc-tab" href="#four">Item Four</a>
                        <a className="mdc-tab" href="#five">Item Five</a>
                        <a className="mdc-tab" href="#six">Item Six</a>
                        <a className="mdc-tab" href="#seven">Item Seven</a>
                        <a className="mdc-tab" href="#eight">Item Eight</a>
                        <a className="mdc-tab" href="#nine">Item Nine</a>
                        <span className="mdc-tab-bar__indicator" />
                    </nav>
                </div>
                <div className="mdc-tab-bar-scroller__indicator mdc-tab-bar-scroller__indicator--forward">
                    <a className="mdc-tab-bar-scroller__indicator__inner material-icons" href="#" aria-label="scroll forward button">
                      navigate_next
                  </a>
                </div>
            </div>
        );
    }
          }
export default TabBarScroller;
