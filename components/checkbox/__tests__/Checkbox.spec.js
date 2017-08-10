import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../index';

jest.mock('uuid', () => ({
    v4: jest.fn(() => '2e732f05-f466-4fba-acb5-2f3be58daf75'),
}));
describe('<Checkbox />', () => {
    it('should be able to render', () => {
        const checkbox = shallow(
            <Checkbox />,
        );
        expect(checkbox).toMatchSnapshot();
    });
    it('should be able to render with a label', () => {
        const label = 'My Checkbox Label';
        const checkbox = shallow(
            <Checkbox label={label} />,
        );
        expect(checkbox).toMatchSnapshot();
    });
    it('should render as checked', () => {
        const label = 'My Checkbox Label';
        const checked = true;
        const checkbox = shallow(
            <Checkbox checked={checked} label={label} />,
        );
        expect(checkbox).toMatchSnapshot();
    });
    it('should render as disabled', () => {
        const label = 'My Checkbox Label';
        const disable = true;
        const checkbox = shallow(
            <Checkbox disable={disable} label={label} />,
        );
        expect(checkbox).toMatchSnapshot();
    });
    it('should render indeterminate', () => {
        const label = 'My Checkbox Label';
        const indeterminate = true;
        const checkbox = shallow(
            <Checkbox indeterminate={indeterminate} label={label} />,
      );
        expect(checkbox).toMatchSnapshot();
    });
});
