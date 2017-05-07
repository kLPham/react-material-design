import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '../index';
import ToolbarRow from '../toolbarRow';

describe('<Toolbar />', () => {
    it('should render a toolbar', () => {
        const toolbar = shallow(
            <Toolbar />,
    );
        expect(toolbar).toMatchSnapshot();
    });
    it('should render fixed', () => {
        const fixed = true;
        const toolbar = shallow(
            <Toolbar fixed={fixed} />,
      );
        expect(toolbar).toMatchSnapshot();
    });
    it('should render with a title', () => {
        const title = 'This is my Title';
        const toolbar = shallow(
            <Toolbar title={title} />,
      );
        expect(toolbar).toMatchSnapshot();
    });
    it('should render with multiple rows', () => {
        const title = 'This is my title';
        const icon = <i className="material-icons">cloud</i>;
        const toolbar = shallow(
            <Toolbar title={title}>
                <ToolbarRow centerElements={icon} />
            </Toolbar>,
      );
        expect(toolbar).toMatchSnapshot();
    });
});
