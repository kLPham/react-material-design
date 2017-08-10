import '@material/menu/dist/mdc.menu.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCSimpleMenu } from '@material/menu';

// TODO: Dynamically set selectMenu
/** Menu */
class Menu extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
        ]).isRequired,
        darkTheme: PropTypes.bool,
        /** When menu is used as a child within <Select /> */
        selectMenu: PropTypes.bool,
    }
    componentDidMount() {
        this.menu = new MDCSimpleMenu(this.rootMenu);
        this.menu.listen('MDCSimpleMenu:selected', ({ detail }) => {
            this.setState({
                selectedIndex: detail.index,
            });
        });
    }
    handleOpen = (focusIndex) => {
        this.menu.show({ focusIndex });
    }
    render() {
        const { children, darkTheme, selectMenu } = this.props;
        return (
            <div
                ref={(d) => { this.rootMenu = d; }}
                className={classNames('mdc-simple-menu', { 'mdc-simple-menu--theme-dark': darkTheme }, { 'mdc-select__menu': selectMenu })}
                tabIndex="-1"
            >
                <ul className="mdc-list mdc-simple-menu__items" role="menu" aria-hidden="true">
                    {children}
                </ul>
            </div>
        );
    }
}
export default Menu;
