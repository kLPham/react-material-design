import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../index';

jest.mock('uuid', () => ({
    v4: jest.fn(() => '2e732f05-f466-4fba-acb5-2f3be58daf75'),
}));
describe('<Switch />', () => {
    it('should render', () => {
        const wrapper = shallow(
            <Switch />,
    );
        expect(wrapper).toMatchSnapshot();
    });
    it('should render with a label', () => {
        const label = 'this is my label';
        const wrapper = shallow(
            <Switch label={label} />,
    );
        expect(wrapper).toMatchSnapshot();
    });
    it('should render with a label', () => {
        const label = 'this is my label';
        const disabled = true;
        const wrapper = shallow(
            <Switch label={label} disabled={disabled} />,
    );
        expect(wrapper).toMatchSnapshot();
    });
});
