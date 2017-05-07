import React from 'react';
import { shallow } from 'enzyme';
import LayoutGridCell from '../layoutGridCell';

describe('<LayoutGridCell />', () => {
    it('should render', () => {
        const layoutGridCell = shallow(
            <LayoutGridCell />,
    );
        expect(layoutGridCell).toMatchSnapshot();
    });
    it('should render with span', () => {
        const span = 2;
        const layoutGridCell = shallow(
            <LayoutGridCell span={span} />,
    );
        expect(layoutGridCell).toMatchSnapshot();
    });
    it('should render with alignment', () => {
        const span = 2;
        const alignment = 'middle';
        const layoutGridCell = shallow(
            <LayoutGridCell span={span} alignment={alignment} />,
    );
        expect(layoutGridCell).toMatchSnapshot();
    });
});
