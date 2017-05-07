import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../index';
import MenuItem from '../menuItem';

describe('<Menu />', () => {
    it('should render', () => {
        const label = 'Clickie';
        const menu = shallow(
            <Menu label={label}>
                <MenuItem value="One" />
            </Menu>,
    );
        expect(menu).toMatchSnapshot();
    });
    it('should render disabled', () => {
        const label = 'Clickie';
        const disabled = true;
        const menu = shallow(
            <Menu label={label} disabled={disabled}>
                <MenuItem value="One" />
                <MenuItem value="Two" />
            </Menu>,
    );
        expect(menu).toMatchSnapshot();
    });
});
