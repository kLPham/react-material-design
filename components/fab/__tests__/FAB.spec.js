import React from 'react';
import { shallow } from 'enzyme';
import FAB from '../index';

describe('<FAB />', () => {
    it('should render and have span element', () => {
        const icon = 'bug_report';
        const fab = shallow(
            <FAB icon={icon} />,
            );
        expect(fab).toMatchSnapshot();
    });
    it('should render mini', () => {
        const mini = true;
        const icon = 'bug_report';
        const fab = shallow(
            <FAB icon={icon} mini={mini} />,
        );
        expect(fab).toMatchSnapshot();
    });
    it('should render plain', () => {
        const plain = true;
        const icon = 'bug_report';
        const fab = shallow(
            <FAB icon={icon} plain={plain} />,
        );
        expect(fab).toMatchSnapshot();
    });
    it('should render absolutely positioned', () => {
        const absolute = true;
        const icon = 'bug_report';
        const location = 'absolute-bottom-right';
        const fab = shallow(
            <FAB icon={icon} absolute={absolute} location={location} />,
        );
        expect(fab).toMatchSnapshot();
    });
    it('should render floating', () => {
        // TODO: should render floating
    });
});
