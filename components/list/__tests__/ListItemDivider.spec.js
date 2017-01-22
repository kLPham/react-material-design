import React from 'react';
import { shallow } from 'enzyme';
import ListItemDivider from '../ListItemDivider';

describe('<ListItemDivider />', () => {
    it('should render as list item div', () => {
        const wrapper = shallow(
            <ListItemDivider />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveClassName('mdc-list-divider');
        expect(wrapper).toHaveProp('role');
    });
    it('should render as list item div with inset', () => {
        const wrapper = shallow(
            <ListItemDivider inset />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveClassName('mdc-list-divider mdc-list-divider--inset');
        expect(wrapper).toHaveProp('role');
    });
});
