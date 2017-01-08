import React, { PropTypes, PureComponent } from 'react';
import classNames from 'classnames';
import { MDCSimpleMenu, MDCSimpleMenuFoundation } from '@material/menu';
import { Set as ImmutableSet } from 'immutable';
import '@material/menu/dist/mdc.menu.css';
import '@material/button/dist/mdc.button.css';

// TODO: Support all permintations of "Button"/"Icon".

// import { buttoncssClasses } from '../classes';
// const { OPEN } = MDCSimpleMenuFoundation.cssClasses;

class Menu extends PureComponent {
    static propTypes = {
        type: PropTypes.string.isRequired,
      //  children: PropTypes.any.isRequired,
    };
    state = {
        classes: new ImmutableSet(),
    };
    componentDidMount() {
        this.foundation.init();
        this.menu = new MDCSimpleMenu(this.root);
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
    menu;
    foundation = new MDCSimpleMenuFoundation({
        addClass: className => this.setState(prevState => ({
            classes: prevState.classes.add(className),
        })),
        removeClass: className => this.setState(prevState => ({
            classes: prevState.classes.remove(className),
        })),
        hasClass: className => this.root.classList.contains(className),
        hasNecessaryDom: () => Boolean(this.root),
        getInnerDimensions: () => this.root,
        registerInteractionHandler: (type, handler) => this.root.addEventListener(type, handler),
        deregisterInteractionHandler: (type, handler) => this.root.removeEventListener(type, handler),
        registerDocumentClickHandler: handler => this.root.addEventListener('click', handler),
        deregisterDocumentClickHandler: handler => this.root.removeEventListener('click', handler),
    });
    handleClick = () => this.menu.open = !this.menu.open;
    render() {
        return (
            <div>
                <button onClick={this.handleClick} className={classNames({ 'mdc-button': this.props.type })}>Clickie</button>
                <div ref={(d) => { this.root = d; }} className={`mdc-simple-menu ${this.state.classes.toJS().join(' ')}`} tabIndex="-1">
                    <ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
                        <li className="mdc-list-item" role="menuitem" tabIndex="0">
                        A Menu Item
                    </li>
                        <li className="mdc-list-item" role="menuitem" tabIndex="0">
                        Another Menu Item
                    </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Menu;
