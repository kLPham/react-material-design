import React, { PropTypes, PureComponent } from 'react';
import { MDCSimpleMenu } from '@material/menu';
import '@material/menu/dist/mdc.menu.css';
import '@material/button/dist/mdc.button.css';
import Button from '../button';
import withFoundation from './hoc';

// TODO: in specs onClick is on <div> not <ul>. TEST.

class Menu extends PureComponent {
    static propTypes = {
        classes: PropTypes.any,
        click: PropTypes.func,
        keydown: PropTypes.func,
        keyup: PropTypes.func,
        disabled: PropTypes.bool,
        label: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.element),
            PropTypes.element,
        ]).isRequired,
    };
    componentDidMount() {
        this.menu = new MDCSimpleMenu(this.root);
    }
    menu;
    handleClick = () => {
        const { open } = this.menu;
        this.menu.open = !open;
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
                    className={classes.toJS().join(' ')}
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
export default withFoundation(Menu);
