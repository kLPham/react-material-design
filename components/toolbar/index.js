import '@material/toolbar/dist/mdc.toolbar.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { MDCToolbar } from '@material/toolbar';
import ToolbarRow from './toolbarRow';

class Toolbar extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element),
        ]),
        darkTheme: PropTypes.bool,
        fixed: PropTypes.bool,
    }
    componentDidMount() {
        this.toolbar = new MDCToolbar(this.mainRoot);
    }
    render() {
        const { children, darkTheme, fixed, ...rest } = this.props;
        return (
            <header ref={(h) => { this.mainRoot = h; }} className={classNames('mdc-toolbar', { 'mdc-toolbar--theme-dark': darkTheme }, { 'mdc-toolbar--fixed': fixed })}>
                <ToolbarRow {...rest} />
                {children}
            </header>
        );
    }
}
export default Toolbar;
