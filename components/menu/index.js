import '@material/button/dist/mdc.button.css';
import '@material/menu/dist/mdc.menu.css';
import React, { PropTypes, PureComponent } from 'react';
import { Set as ImmutableSet } from 'immutable';

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
        classes: PropTypes.any,
        click: PropTypes.func,
        disabled: PropTypes.bool,
        keydown: PropTypes.func,
        keyup: PropTypes.func,
        label: PropTypes.string,
    };
    state = {
        classes: new ImmutableSet().add('mdc-simple-menu'),
        selectedItem: null,
    }
    componentDidMount() {
        this.foundation = new MDCSimpleMenu(this);
        this.foundation.init();
    }
    menu;
    handleClick = () => {
        console.log('handleClick', this.foundation);
        this.foundation.open();
        // const { open } = this.foundation.open;
        // this.menu.open = !open;
    };
    render() {
        const { children, classes, click, disabled, keydown, keyup, label } = this.props;
        return (
            <div>
                <Button
                    disabled={disabled}
                    onClick={this.handleClick}
                    label={label}
                />
                <div
                    onKeyDown={keydown}
                    onKeyUp={keyup}
                    onClick={click}
                    // onClick={onClick}

                    ref={(d) => { this.root = d; }}
                    className={classes && classes.toJS().join(' ')}
                    tabIndex="-1"
                >
                    <ul
                        className="mdc-simple-menu__items mdc-list"
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
