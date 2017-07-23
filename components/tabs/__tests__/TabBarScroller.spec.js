import React from 'react';
import { shallow } from 'enzyme';
import TabBarScroller from '../tabBarScroller';

describe('<TabBarScroller />', () => {
    it('should render', () => {
        const tabBarScroller = shallow(
            <TabBarScroller />,
    );
        expect(tabBarScroller).toMatchSnapshot();
    });
});
