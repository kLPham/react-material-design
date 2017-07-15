import React from 'react';
import { shallow } from 'enzyme';
import DrawerSpacer from '../drawerSpacer';

describe('<DrawerSpacer />', () => {
    it('should render', () => {
        const drawerSpacer = shallow(
            <DrawerSpacer />,
    );
        expect(drawerSpacer).toMatchSnapshot();
    });
});
