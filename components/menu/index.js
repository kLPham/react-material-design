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
        parentLabel: PropTypes.string.isRequired,
    };
    state = {
        classes: new ImmutableSet().add('mdc-simple-menu'),
        selectedItem: null,
        saveFocus: null,
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
        const { children, parentLabel, ...rest } = this.props;
        const { classes, click, keydown, keyup, onClick } = this.state;
        return (
            <div>
                <Button className="mdc-menu-anchor" label={parentLabel} onClick={() => this.handleClick()} {...rest} />
                <div
                    className={classNames(classes.toJS().join(' '))}
                    onClick={click}
                    onKeyDown={keydown}
                    onKeyUp={keyup}
                    ref={(d) => { this.mainRoot = d; }}
                    tabIndex="-1"
                >
                    <ul
                        aria-hidden="true"
                        className="mdc-simple-menu__items mdc-list"
                        ref={(u) => { this.itemsContainer = u; }}
                        role="menu"
                    >
                        {children}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Menu;
