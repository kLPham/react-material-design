import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@material/select/dist/mdc.select.css';
import { MDCSelect } from '@material/select';

// TODO: Can I change children to reuse <ListItem />?
// TODO: menufactory
// TODO: Cancel
class Select extends Component {
    static propTypes = {
        disable: PropTypes.bool,
    }
    componentDidMount() {
        const { disable } = this.props;
        this.select = new MDCSelect(this.mainRoot);
        this.select.foundation_.setDisabled(disable);
        this.select.listen('MDCSelect:change', () => {
            this.setState({
                selectedTextContent: this.select.selectedOptions[0].textContent,
                selectedIndex: this.select.selectedIndex,
                selectedValue: this.select.value,
            });
        });
    }
    render() {
        return (
            <div ref={(d) => { this.mainRoot = d; }} className="mdc-select" role="listbox" tabIndex="0">
                <span className="mdc-select__selected-text">Pick a food group</span>
                <div className="mdc-simple-menu mdc-select__menu">
                    <ul className="mdc-list mdc-simple-menu__items">
                        <li className="mdc-list-item" role="option" id="grains" aria-disabled="true">
                            Pick a food group
                        </li>
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
