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
    it('should render permanent', () => {
        const type = 'permanent';
        const drawer = shallow(
            <Drawer type={type} />,
    );
        expect(drawer).toMatchSnapshot();
    });
    it('should render persistent', () => {
        const type = 'persistent';
        const drawer = shallow(
            <Drawer type={type} />,
    );
        expect(drawer).toMatchSnapshot();
    });
});
