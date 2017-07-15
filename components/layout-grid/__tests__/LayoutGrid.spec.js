import React from 'react';
import { shallow } from 'enzyme';
import LayoutGrid from '../index';
import LayoutGridCell from '../layoutGridCell';

describe('<LayoutGrid />', () => {
    it('should render', () => {
        const layoutGrid = shallow(
            <LayoutGrid>
                <LayoutGridCell />
            </LayoutGrid>,
    );
        expect(layoutGrid).toMatchSnapshot();
    });
});
