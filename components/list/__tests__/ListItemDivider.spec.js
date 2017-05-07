import React from 'react';
import { shallow } from 'enzyme';
import ListItemDivider from '../ListItemDivider';

describe('<ListItemDivider />', () => {
    it('should render as list item div', () => {
        const listItemDivider = shallow(
            <ListItemDivider />,
        );
        expect(listItemDivider).toMatchSnapshot();
    });
    it('should render as list item div with inset', () => {
        const listItemDivider = shallow(
            <ListItemDivider inset />,
        );
        expect(listItemDivider).toMatchSnapshot();
    });
});
