import React from 'react';
import { shallow } from 'enzyme';
import ListDivider from '../ListDivider';

describe('<ListDivider />', () => {
    it('should render as list item div', () => {
        const listDivider = shallow(
            <ListDivider />,
        );
        expect(listDivider).toMatchSnapshot();
    });
    it('should render as list item div with inset', () => {
        const listDivider = shallow(
            <ListDivider inset />,
        );
        expect(listDivider).toMatchSnapshot();
    });
});
