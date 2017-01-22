import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';
import { buttoncssClasses } from '../../classes';

describe('<Button />', () => {
    it('should render flat', () => {
        const label = 'Flat button';
        const wrapper = shallow(
            <Button label={label} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveText(label);
    });
    it('should render colored', () => {
        const label = 'Colored button';
        const type = 'colored';
        const cssClass = buttoncssClasses[type];
        const wrapper = shallow(
            <Button label={label} type={type} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveText(label);
        expect(wrapper).toHaveClassName(cssClass);
    });

    it('should render raised', () => {
        const label = 'Raised button';
        const type = 'raised';
        const cssClass = buttoncssClasses[type];
        const wrapper = shallow(
            <Button label={label} type={type} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveText(label);
        expect(wrapper).toHaveClassName(cssClass);
    });

    it('should render raised disabled', () => {
        const label = 'Raised disabled button';
        const type = 'raised';
        const cssClass = buttoncssClasses[type];
        const wrapper = shallow(
            <Button label={label} type={type} disabled />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveText(label);
        expect(wrapper).toHaveClassName(cssClass);
        expect(wrapper).toBeDisabled();
    });

    it('should render dense', () => {
        const label = 'Dense button';
        const type = 'dense';
        const cssClass = buttoncssClasses[type];

        const wrapper = shallow(
            <Button label={label} type={type} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveText(label);
        expect(wrapper).toHaveClassName(cssClass);
    });

    it('should render compact', () => {
        const label = 'Compact button';
        const type = 'compact';
        const cssClass = buttoncssClasses[type];
        const wrapper = shallow(
            <Button label={label} type={type} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveText(label);
        expect(wrapper).toHaveClassName(cssClass);
    });

    it('should render primary', () => {
        const label = 'Primary button';
        const type = 'primary';
        const cssClass = buttoncssClasses[type];
        const wrapper = shallow(
            <Button label={label} type={type} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveText(label);
        expect(wrapper).toHaveClassName(cssClass);
    });
});
