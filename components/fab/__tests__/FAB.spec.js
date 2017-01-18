import React from 'react';
import { shallow } from 'enzyme';
import FAB from '../index';
import { fabcssClasses } from '../../classes';

describe('<FAB />', () => {
    it('should render and have span element', () => {
        const icon = 'bug_report';
        const wrapper = shallow(
            <FAB icon={icon} />,
            );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveClassName('material-icons');
        expect(wrapper.find('span')).toBePresent();
        expect(wrapper.find('span')).toHaveClassName('mdc-fab__icon');
        expect(wrapper.find('span')).toHaveText(icon);
    });
    it('should render mini', () => {
        const type = 'mini';
        const cssClass = fabcssClasses[type];
        const icon = 'bug_report';
        const wrapper = shallow(
            <FAB icon={icon} type={type} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveClassName('material-icons');
        expect(wrapper).toHaveClassName(cssClass);
        expect(wrapper.find('span')).toBePresent();
        expect(wrapper.find('span')).toHaveClassName('mdc-fab__icon');
        expect(wrapper.find('span')).toHaveText(icon);
    });
    it('should render plain', () => {
        const type = 'plain';
        const cssClass = fabcssClasses[type];
        const icon = 'bug_report';
        const wrapper = shallow(
            <FAB icon={icon} type={type} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveClassName('material-icons');
        expect(wrapper).toHaveClassName(cssClass);
        expect(wrapper.find('span')).toBePresent();
        expect(wrapper.find('span')).toHaveClassName('mdc-fab__icon');
        expect(wrapper.find('span')).toHaveText(icon);
    });
    it('should render absolutely positioned', () => {
        const type = 'absolute';
        const cssClass = fabcssClasses[type];
        const icon = 'bug_report';
        const location = 'absolute-bottom-right';
        const wrapper = shallow(
            <FAB icon={icon} type={type} location={location} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveClassName('material-icons');
        expect(wrapper).toHaveClassName(cssClass);
        expect(wrapper.find('span')).toBePresent();
        expect(wrapper.find('span')).toHaveClassName('mdc-fab__icon');
        expect(wrapper.find('span')).toHaveText(icon);
    });
    it('should render floating', () => {
        // TODO: should render floating
    });
});
