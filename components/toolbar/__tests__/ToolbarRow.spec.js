import React from 'react';
import { shallow } from 'enzyme';
import ToolbarRow from '../toolbarRow';

describe('<ToolbarRow />', () => {
    it('should render', () => {
        const toolbarRow = shallow(
            <ToolbarRow />,
    );
        expect(toolbarRow).toMatchSnapshot();
    });
    it('should render with a title', () => {
        const title = 'This is my Title';
        const toolbarRow = shallow(
            <ToolbarRow title={title} />,
      );
        expect(toolbarRow).toMatchSnapshot();
    });
    it('should render with leftElements', () => {
        const icon = <i className="material-icons">cloud</i>;
        const toolbarRow = shallow(
            <ToolbarRow leftElements={icon} />,
      );
        expect(toolbarRow).toMatchSnapshot();
    });
    it('should render with centerElements', () => {
        const icon = <i className="material-icons">cloud</i>;
        const toolbarRow = shallow(
            <ToolbarRow centerElements={icon} />,
      );
        expect(toolbarRow).toMatchSnapshot();
    });
    it('should render with rightElements', () => {
        const icon = <i className="material-icons">cloud</i>;
        const toolbarRow = shallow(
            <ToolbarRow rightElements={icon} />,
      );
        expect(toolbarRow).toMatchSnapshot();
    });
});
