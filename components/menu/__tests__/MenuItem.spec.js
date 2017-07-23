import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../menuItem';

jest.mock('uuid', () => ({
    v4: jest.fn(() => '2e732f05-f466-4fba-acb5-2f3be58daf75'),
}));

describe('<MenuItem />', () => {
    it('should render', () => {
        const value = 'this is my value';
        const menuItem = shallow(
            <MenuItem value={value} />,
    );
        expect(menuItem).toMatchSnapshot();
    });
    it('should render disabled', () => {
        const disable = true;
        const value = 'this is my value';
        const menuItem = shallow(
            <MenuItem disable={disable} value={value} />,
      );
        expect(menuItem).toMatchSnapshot();
    });
});
