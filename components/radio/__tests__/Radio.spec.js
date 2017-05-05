import React from 'react';
import { shallow, mount } from 'enzyme';
import Radio from '../index';

jest.mock('uuid', () => ({
    v4: jest.fn(() => '2e732f05-f466-4fba-acb5-2f3be58daf75'),
}));
// TODO: mount has a mixture of component and rendered component. I don't want to use that as a test.
// TODO: FormField breaks some of these tests.
describe('<Radio />', () => {
    it('should render basic radio button', () => {
        const label = 'Radio 1';
        const radio = shallow(
            <Radio label={label} />,
        );
        expect(radio).toMatchSnapshot();
    //    expect(radio.find('div').at(1)).toHaveClassName('mdc-radio');
        expect(radio.find('input')).toHaveClassName('mdc-radio__native-control');
        expect(radio.find('input')).toHaveProp('checked');
        expect(radio.find('label')).toHaveText(label);
    });
    it('should render disabled radio button', () => {
        const label = 'Radio 1';
        const radio = mount(
            <Radio disabled label={label} />,
        );
        expect(radio).toMatchSnapshot();
        expect(radio.find('div').at(1)).toHaveClassName('mdc-radio mdc-radio--disabled');
        expect(radio.find('input')).toHaveClassName('mdc-radio__native-control');
        expect(radio.find('input')).toHaveProp('checked');
        expect(radio.find('input')).toHaveProp('disabled');
        expect(radio.find('label')).toHaveText(label);
    });
});
