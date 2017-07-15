import React from 'react';
import { shallow } from 'enzyme';
import Radio from '../index';

jest.mock('uuid', () => ({
    v4: jest.fn(() => '2e732f05-f466-4fba-acb5-2f3be58daf75'),
}));
// TODO: FormField breaks some of these tests.
describe('<Radio />', () => {
    it('should render', () => {
        const radio = shallow(
            <Radio />,
        );
        expect(radio).toMatchSnapshot();
    });
    it('should render with a label', () => {
        const label = 'Radio 1';
        const radio = shallow(
            <Radio label={label} />,
        );
        expect(radio).toMatchSnapshot();
    });

    it('should render disabled', () => {
        const label = 'Radio 1';
        const disabled = true;
        const radio = shallow(
            <Radio disabled={disabled} label={label} />,
        );
        expect(radio).toMatchSnapshot();
    });
    it('should render checked', () => {
        const label = 'Radio 1';
        const checked = true;
        const radio = shallow(
            <Radio checked={checked} label={label} />,
        );
        expect(radio).toMatchSnapshot();
    });
});
