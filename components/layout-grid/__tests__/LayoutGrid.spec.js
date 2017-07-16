import React from 'react';
import { shallow, mount } from 'enzyme';
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
    it('should render nested', () => {
        const nested = true;
        const layoutGrid = mount(
            <LayoutGrid>
                <LayoutGridCell>
                    <LayoutGrid nested={nested}>
                        <LayoutGridCell><div>Second Level</div></LayoutGridCell>
                        <LayoutGridCell><div>Second Level</div></LayoutGridCell>
                    </LayoutGrid>
                </LayoutGridCell>
                <LayoutGridCell><div>First Level</div></LayoutGridCell>
                <LayoutGridCell><div>First Level</div></LayoutGridCell>
            </LayoutGrid>,
      );
        expect(layoutGrid).toMatchSnapshot();
    });
});
