import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../index';
import MenuItem from '../menuItem';

describe('<Menu />', () => {
    it('should render', () => {
        const parentLabel = 'Clickie';
        const menu = shallow(
            <Menu parentLabel={parentLabel}>
                <MenuItem value="One" />
            </Menu>,
    );
        expect(menu).toMatchSnapshot();
    });
});
