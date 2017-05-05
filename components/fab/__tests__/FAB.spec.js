import React from 'react';
import { shallow } from 'enzyme';
import FAB from '../index';
import { fabcssClasses } from '../../classes';

describe('<FAB />', () => {
    it('should render and have span element', () => {
        const icon = 'bug_report';
        const fab = shallow(
            <FAB icon={icon} />,
            );
        expect(fab).toMatchSnapshot();
        expect(fab).toHaveClassName('material-icons');
        expect(fab.find('span')).toBePresent();
        expect(fab.find('span')).toHaveClassName('mdc-fab__icon');
        expect(fab.find('span')).toHaveText(icon);
    });
    it('should render mini', () => {
        const mini = true;
        const cssClass = fabcssClasses.mini;
        const icon = 'bug_report';
        const fab = shallow(
            <FAB icon={icon} mini={mini} />,
        );
        expect(fab).toMatchSnapshot();
        expect(fab).toHaveClassName('material-icons');
        expect(fab).toHaveClassName(cssClass);
        expect(fab.find('span')).toBePresent();
        expect(fab.find('span')).toHaveClassName('mdc-fab__icon');
        expect(fab.find('span')).toHaveText(icon);
    });
    it('should render plain', () => {
        const plain = true;
        const cssClass = fabcssClasses.plain;
        const icon = 'bug_report';
        const fab = shallow(
            <FAB icon={icon} plain={plain} />,
        );
        expect(fab).toMatchSnapshot();
        expect(fab).toHaveClassName('material-icons');
        expect(fab).toHaveClassName(cssClass);
        expect(fab.find('span')).toBePresent();
        expect(fab.find('span')).toHaveClassName('mdc-fab__icon');
        expect(fab.find('span')).toHaveText(icon);
    });
    it('should render absolutely positioned', () => {
        const absolute = true;
        const cssClass = fabcssClasses.absolute;
        const icon = 'bug_report';
        const location = 'absolute-bottom-right';
        const fab = shallow(
            <FAB icon={icon} absolute={absolute} location={location} />,
        );
        expect(fab).toMatchSnapshot();
        expect(fab).toHaveClassName('material-icons');
        expect(fab).toHaveClassName(cssClass);
        expect(fab.find('span')).toBePresent();
        expect(fab.find('span')).toHaveClassName('mdc-fab__icon');
        expect(fab.find('span')).toHaveText(icon);
    });
    it('should render floating', () => {
        // TODO: should render floating
    });
});
