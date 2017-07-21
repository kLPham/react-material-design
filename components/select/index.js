import classNames from 'classnames';
import '@material/select/dist/mdc.select.css';
import React, { PureComponent } from 'react';
import { Set as ImmutableSet, Map as ImmutableMap } from 'immutable';
import MDCSelect from './component';

// TODO: use simple menu.
class Select extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            classes: new ImmutableSet(),
            menuClasses: new ImmutableSet(),
            attributes: new ImmutableMap(),
            style: new ImmutableMap(),
            menuElStyle: new ImmutableMap(),
            menuElAttr: new ImmutableMap(),
        };
    }
    componentDidMount() {
        this.foundation = new MDCSelect(this);
        this.foundation.init();
        this.menuEl.addEventListener('MDCSimpleMenu:selected', this.state['MDCSimpleMenu:selected']);
        this.menuEl.addEventListener('MDCSimpleMenu:cancel', this.state['MDCSimpleMenu:cancel']);
    }
    componeWillUnmount() {
        this.foundation.destroy();
    }
    render() {
        const { attributes, menuElAttr, menuClasses, menuElStyle, classes, click, keyup, keydown, style } = this.state;
        return (
            <div
                ref={(d) => { this.rootEl = d; }}
                className={classNames('mdc-select', classes.toJS().join(' '))}
                tabIndex="0"
                role="listbox"
                onClick={click}
                onKeyUp={keyup}
                onKeyDown={keydown}
                style={style.toJS()}
                {...attributes.toJS()}
            >
                <span className="mdc-select__selected-text">Pick a food group</span>
                <div
                    className={classNames('mdc-simple-menu', 'mdc-select__menu', menuClasses.toJS().join(' '))}
                    {...menuElAttr.toJS()}
                    style={menuElStyle.toJS()}
                    ref={(d) => { this.menuEl = d; }}
                >
                    <ul
                        className="mdc-list mdc-simple-menu__items"
                        ref={(u) => { this.itemsContainer = u; }}
                    >
                        <li className="mdc-list-item" aria-selected role="option" id="grains" tabIndex="0">
                            Bread, Cereal, Rice, and Pasta
                        </li>
                        <li className="mdc-list-item" aria-selected role="option" id="vegetables" tabIndex="0">
                            Vegetables
                        </li>
                        <li className="mdc-list-item" aria-selected role="option" id="fruit" tabIndex="0">
                            Fruit
                        </li>
                        <li className="mdc-list-item" aria-selected role="option" id="dairy" tabIndex="0">
                            Milk, Yogurt, and Cheese
                        </li>
                        <li className="mdc-list-item" aria-selected role="option" id="meat" tabIndex="0">
                            Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                        </li>
                        <li className="mdc-list-item" aria-selected role="option" id="fats" tabIndex="0">
                            Fats, Oils, and Sweets
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Select;
