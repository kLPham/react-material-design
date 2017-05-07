import React from 'react';
import { shallow } from 'enzyme';
import Drawer from '../index';

describe('<Drawer />', () => {
    it('should render', () => {
        const drawer = shallow(
            <Drawer />,
    );
        expect(drawer).toMatchSnapshot();
    });
});
