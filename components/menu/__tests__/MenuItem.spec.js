import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../menuItem';

describe('<MenuItem />', () => {
    it('should render', () => {
        const value = 'this is my value';
        const menuItem = shallow(
            <MenuItem value={value} />,
    );
        expect(menuItem).toMatchSnapshot();
    });
});
