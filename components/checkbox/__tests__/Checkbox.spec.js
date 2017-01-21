import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../index';

describe('<Checkbox />', () => {
    it('should be able to render', () => {
        const label = 'My Checkbox Label';
        const wrapper = shallow(
            <Checkbox label={label} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input')).toHaveClassName('mdc-checkbox__native-control');
        expect(wrapper.find('label')).toHaveClassName('mdc-checkbox-label');
        expect(wrapper.find('label')).toHaveText(label);
    });
    it('should render as checked', () => {
        const label = 'My Checkbox Label';
        const checked = true;
        const wrapper = shallow(
            <Checkbox checked={checked} label={label} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input')).toBeChecked();
        expect(wrapper.find('input')).toHaveClassName('mdc-checkbox__native-control');
        expect(wrapper.find('label')).toHaveClassName('mdc-checkbox-label');
        expect(wrapper.find('label')).toHaveText(label);
    });
    it('should render as disabled', () => {
        const label = 'My Checkbox Label';
        const disabled = true;
        const wrapper = shallow(
            <Checkbox disabled={disabled} label={label} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input')).toBeDisabled();
        expect(wrapper.find('input')).toHaveClassName('mdc-checkbox__native-control');
        expect(wrapper.find('label')).toHaveClassName('mdc-checkbox-label');
        expect(wrapper.find('label')).toHaveText(label);
    });
});
