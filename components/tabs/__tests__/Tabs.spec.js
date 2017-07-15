import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '../index';
import Tab from '../tab';

describe('<Tabs />', () => {
    it('should render as basic', () => {
        const tab = shallow(
            <Tabs>
                <Tab active label="Home" />
                <Tab label="Marketing" />
            </Tabs>,
        );
        expect(tab).toMatchSnapshot();
    });
    it('should render with icons', () => {
        const tab = shallow(
            <Tabs>
                <Tab active icon="home" />
                <Tab icon="phone" />
            </Tabs>,
        );
        expect(tab).toMatchSnapshot();
    });
    it('should render with icons and text', () => {
        const tab = shallow(
            <Tabs>
                <Tab active label="Home" icon="home" />
                <Tab label="Marketing" icon="phone" />
            </Tabs>,
        );
        expect(tab).toMatchSnapshot();
    });
});
