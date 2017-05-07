import React from 'react';
import { shallow } from 'enzyme';
import DrawerContent from '../drawerContent';

describe('<DrawerContent />', () => {
    it('should render', () => {
        const drawerContent = shallow(
            <DrawerContent>Text</DrawerContent>,
    );
        expect(drawerContent).toMatchSnapshot();
    });
});
