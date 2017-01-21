import React, { PureComponent } from 'react';
import '@material/select/dist/mdc.select.css';
import MDCSelect from './component';

class Select extends PureComponent {
    componentWillMount() {
        this.foundation = new MDCSelect(this);
        this.foundation.init();
        console.log('componentWillMount', this.foundation);
    }
    render() {
        return (
            <div className="mdc-select" role="listbox" tabIndex="0">
                <span className="mdc-select__selected-text">Pick a food group</span>
                <div className="mdc-simple-menu mdc-select__menu">
                    <ul className="mdc-list mdc-simple-menu__items">
                        <li className="mdc-list-item" role="option" id="grains" tabIndex="0">
                            Bread, Cereal, Rice, and Pasta
                        </li>
                        <li className="mdc-list-item" role="option" id="vegetables" tabIndex="0">
                            Vegetables
                        </li>
                        <li className="mdc-list-item" role="option" id="fruit" tabIndex="0">
                            Fruit
                        </li>
                        <li className="mdc-list-item" role="option" id="dairy" tabIndex="0">
                            Milk, Yogurt, and Cheese
                        </li>
                        <li className="mdc-list-item" role="option" id="meat" tabIndex="0">
                            Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                        </li>
                        <li className="mdc-list-item" role="option" id="fats" tabIndex="0">
                            Fats, Oils, and Sweets
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Select;
