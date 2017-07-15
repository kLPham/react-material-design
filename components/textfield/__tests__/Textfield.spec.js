import React from 'react';
import { shallow } from 'enzyme';
import Textfield from '../index';

jest.mock('uuid', () => ({
    v4: jest.fn(() => '2e732f05-f466-4fba-acb5-2f3be58daf75'),
}));
describe('<Textfield />', () => {
    it('should render', () => {
        const textfield = shallow(
            <Textfield />,
    );
        expect(textfield).toMatchSnapshot();
    });
    it('should render with a label', () => {
        const label = 'this is my label';
        const textfield = shallow(
            <Textfield label={label} />,
    );
        expect(textfield).toMatchSnapshot();
    });
    it('should render with a value', () => {
        const value = 'this is my value';
        const label = 'this is my label';

        const textfield = shallow(
            <Textfield label={label} value={value} />,
    );
        expect(textfield).toMatchSnapshot();
    });
    it('should render with as primary', () => {
        const value = 'this is my value';
        const label = 'this is my label';
        const primary = true;
        const textfield = shallow(
            <Textfield label={label} value={value} primary={primary} />,
    );
        expect(textfield).toMatchSnapshot();
    });
    it('should render with a helpText', () => {
        const value = 'this is my value';
        const label = 'this is my label';
        const helpText = 'this is my helpText';
        const textfield = shallow(
            <Textfield label={label} value={value} helpText={helpText} />,
    );
        expect(textfield).toMatchSnapshot();
    });
    it('should render as required', () => {
        const label = 'this is my label';
        const required = true;
        const textfield = shallow(
            <Textfield label={label} required={required} />,
    );
        expect(textfield).toMatchSnapshot();
    });
});
