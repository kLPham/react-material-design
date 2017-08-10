import React from 'react';
import { shallow } from 'enzyme';
import Select from '../index';
import Menu from '../../menu';
import MenuItem from '../../menu/menuItem';

describe('<Select />', () => {
    it('should render', () => {
        const select = shallow(
            <Select>
                <Menu selectMenu>
                    <MenuItem value="Bread, Cereal, Rice, and Pasta" />
                    <MenuItem value="Vegetables" />
                    <MenuItem value="Fruit" />
                    <MenuItem value="Milk, Yogurt, and Cheese" />
                    <MenuItem value="Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts" />
                    <MenuItem value="Fats, Oils, and Sweets" />
                </Menu>
            </Select>,
    );
        expect(select).toMatchSnapshot();
    });
    it('should render disabled', () => {
        const disable = true;
        const select = shallow(
            <Select disable={disable}>
                <Menu selectMenu>
                    <MenuItem value="Bread, Cereal, Rice, and Pasta" />
                    <MenuItem value="Vegetables" />
                    <MenuItem value="Fruit" />
                    <MenuItem value="Milk, Yogurt, and Cheese" />
                    <MenuItem value="Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts" />
                    <MenuItem value="Fats, Oils, and Sweets" />
                </Menu>
            </Select>,
      );
        expect(select).toMatchSnapshot();
    });
});
