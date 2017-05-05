import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../index';

jest.mock('uuid', () => ({
    v4: jest.fn(() => '2e732f05-f466-4fba-acb5-2f3be58daf75'),
}));
describe('<Checkbox />', () => {
    it('should be able to render', () => {
        const label = 'My Checkbox Label';
        const checkbox = shallow(
            <Checkbox label={label} />,
        );
        expect(checkbox).toMatchSnapshot();
        expect(checkbox.find('input')).toHaveClassName('mdc-checkbox__native-control');
        expect(checkbox.find('label')).toHaveClassName('mdc-checkbox-label');
        expect(checkbox.find('label')).toHaveText(label);
    });
    it('should render as checked', () => {
        const label = 'My Checkbox Label';
        const checked = true;
        const checkbox = shallow(
            <Checkbox checked={checked} label={label} />,
        );
        expect(checkbox).toMatchSnapshot();
        expect(checkbox.find('input')).toBeChecked();
        expect(checkbox.find('input')).toHaveClassName('mdc-checkbox__native-control');
        expect(checkbox.find('label')).toHaveClassName('mdc-checkbox-label');
        expect(checkbox.find('label')).toHaveText(label);
    });
    it('should render as disabled', () => {
        const label = 'My Checkbox Label';
        const disabled = true;
        const checkbox = shallow(
            <Checkbox disabled={disabled} label={label} />,
        );
        expect(checkbox).toMatchSnapshot();
        expect(checkbox.find('input')).toBeDisabled();
        expect(checkbox.find('input')).toHaveClassName('mdc-checkbox__native-control');
        expect(checkbox.find('label')).toHaveClassName('mdc-checkbox-label');
        expect(checkbox.find('label')).toHaveText(label);
    });
});
