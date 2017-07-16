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
    it('should render with columnSpan', () => {
        const columnSpan = 2;
        const layoutGridCell = shallow(
            <LayoutGridCell columnSpan={columnSpan} />,
    );
        expect(layoutGridCell).toMatchSnapshot();
    });
    it('should render with alignment', () => {
        const alignment = 'top';
        const layoutGridCell = shallow(
            <LayoutGridCell alignment={alignment} />,
    );
        expect(layoutGridCell).toMatchSnapshot();
    });
    it('should render with screenSize', () => {
        const columnSpan = 2;
        const screenSize = 'tablet';
        const layoutGridCell = shallow(
            <LayoutGridCell columnSpan={columnSpan} screenSize={screenSize} />,
      );
        expect(layoutGridCell).toMatchSnapshot();
    });
});
