import React from 'react';
import { shallow } from 'enzyme';
import TabsBar from '../index';
import Tab from '../tab';

describe('<TabsBar />', () => {
    it('should render as basic', () => {
        const tabBar = shallow(
            <TabsBar>
                <Tab active label="Home" />
                <Tab label="Marketing" />
            </TabsBar>,
        );
        expect(tabBar).toMatchSnapshot();
    });
    it('should render with icons', () => {
        const tabBar = shallow(
            <TabsBar>
                <Tab active icon="home" />
                <Tab icon="phone" />
            </TabsBar>,
        );
        expect(tabBar).toMatchSnapshot();
    });
    it('should render with icons and text', () => {
        const tabBar = shallow(
            <TabsBar>
                <Tab active label="Home" icon="home" />
                <Tab label="Marketing" icon="phone" />
            </TabsBar>,
        );
        expect(tabBar).toMatchSnapshot();
    });
});
