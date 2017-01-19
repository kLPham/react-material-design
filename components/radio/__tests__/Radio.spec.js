import React from 'react';
import { shallow, mount } from 'enzyme';
import Radio from '../index';

// TODO: mount has a mixture of component and rendered component. I don't want to use that as a test.
describe('<Radio />', () => {
    it('should render basic radio button', () => {
        const label = 'Radio 1';
        const wrapper = shallow(
            <Radio label={label} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('div').at(1)).toHaveClassName('mdc-radio');
        expect(wrapper.find('input')).toHaveClassName('mdc-radio__native-control');
        expect(wrapper.find('input')).toHaveProp('checked');
        expect(wrapper.find('label')).toHaveText(label);
    });
    it('should render disabled radio button', () => {
        const label = 'Radio 1';
        const wrapper = mount(
            <Radio disabled label={label} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('div').at(1)).toHaveClassName('mdc-radio mdc-radio--disabled');
        expect(wrapper.find('input')).toHaveClassName('mdc-radio__native-control');
        expect(wrapper.find('input')).toHaveProp('checked');
        expect(wrapper.find('input')).toHaveProp('disabled');
        expect(wrapper.find('label')).toHaveText(label);
    });
});
