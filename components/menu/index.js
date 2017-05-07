import '@material/button/dist/mdc.button.css';
import '@material/menu/dist/mdc.menu.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Set as ImmutableSet } from 'immutable';
import classNames from 'classnames';
import Button from '../button';
import MDCSimpleMenu from './component';

// TODO: in specs onClick is on <div> not <ul>. TEST.
// TODO: Menu presentation types: button, action (see textfield dropdown menu), other control.
// TODO: disable menu.
// TODO: Support all permintations of "Button"/"Icon".
// TODO: I'm thinking that notifySelected is suppoed to be used insted of getIndexForEventTarget.
// TODO: Positioning the menu.
// TODO: hasClass, hasNecessaryDom are hacks.
// TODO: investigate how registerDocumentClickHandler is different than the click generated with registerInteractionHandler

class Menu extends PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
        ]).isRequired,
        disabled: PropTypes.bool,
        label: PropTypes.string.isRequired,
    };
    state = {
        classes: new ImmutableSet().add('mdc-simple-menu'),
        selectedItem: null,
    }
    componentDidMount() {
        this.foundation = new MDCSimpleMenu(this);
        console.dir(this.foundation);
        this.foundation.init();
    }
    menu;
    handleClick = () => {
        this.foundation.open();
        // const { open } = this.foundation.open;
        // this.menu.open = !open;
    };
    render() {
        const { children, disabled, label } = this.props;
        const { classes, click, keydown, keyup, onClick } = this.state;
        return (
            <div
                ref={(d) => { this.documentRoot = d; }}
                onClick={onClick}
            >
                <Button
                    disabled={disabled}
                    onClick={this.handleClick}
                    label={label}
                />
                <div
                    ref={(d) => { this.mainRoot = d; }}
                    className={classNames(classes.toJS().join(' '))}
                    onKeyDown={keydown}
                    onKeyUp={keyup}
                    onClick={click}
                    tabIndex="-1"
                >
                    <ul
                        className="mdc-simple-menu__items mdc-list"
                        ref={(d) => { this.itemContainer = d; }}
                        role="menu"
                        aria-hidden="true"
                    >
                        {children}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Menu;
