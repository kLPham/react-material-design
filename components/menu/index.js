import '@material/menu/dist/mdc.menu.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCSimpleMenu } from '@material/menu';

class Menu extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
        ]).isRequired,
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
        const { children } = this.props;
        return (
            <div
                ref={(d) => { this.rootMenu = d; }}
                className="mdc-simple-menu"
                tabIndex="-1"
            >
                <ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
                    {children}
                </ul>
            </div>
        );
    }
}
export default Menu;
