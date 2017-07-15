import React from 'react';
import { shallow } from 'enzyme';
import Tab from '../tab';

describe('<Tab />', () => {
    it('should render', () => {
        const label = 'Home';
        const tab = shallow(
            <Tab label={label} />,
        );
        expect(tab).toMatchSnapshot();
    });

    it('should render active', () => {
        const label = 'Home';
        const active = true;
        const tab = shallow(
            <Tab active={active} label={label} />,
        );
        expect(tab).toMatchSnapshot();
    });

    it('should render with icon', () => {
        const icon = 'home';
        const tab = shallow(
            <Tab icon={icon} />,
        );
        expect(tab).toMatchSnapshot();
    });

    it('should render with icon and Text', () => {
        const icon = 'home';
        const label = 'Home';
        const tab = shallow(
            <Tab label={label} icon={icon} />,
        );
        expect(tab).toMatchSnapshot();
    });
});
