import React from 'react';
import { shallow } from 'enzyme';
import DrawerHeader from '../drawerHeader';

describe('<DrawerHeader />', () => {
    it('should render', () => {
        const drawerHeader = shallow(
            <DrawerHeader>Text</DrawerHeader>,
    );
        expect(drawerHeader).toMatchSnapshot();
    });
    it('should render primary', () => {
        const primary = true;
        const drawerHeader = shallow(
            <DrawerHeader primary={primary}>Text</DrawerHeader>,
    );
        expect(drawerHeader).toMatchSnapshot();
    });
});
