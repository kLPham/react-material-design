import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';
import { buttoncssClasses } from '../../classes';

describe('<Button />', () => {
    it('should render flat', () => {
        const label = 'Flat button';
        const defaultClass = 'mdc-button';
        const button = shallow(
            <Button label={label} />,
        );
        expect(button).toMatchSnapshot();
        expect(button).toHaveText(label);
        expect(button).toHaveClassName(defaultClass);
    });
    it('should render colored', () => {
        const label = 'Colored button';
        const colored = true;
        const cssClass = buttoncssClasses.colored;
        const button = shallow(
            <Button colored={colored} label={label} />,
        );
        expect(button).toMatchSnapshot();
        expect(button).toHaveText(label);
        expect(button).toHaveClassName(cssClass);
    });

    it('should render raised', () => {
        const label = 'Raised button';
        const raised = true;
        const cssClass = buttoncssClasses.raised;
        const button = shallow(
            <Button raised={raised} label={label} />,
        );
        expect(button).toMatchSnapshot();
        expect(button).toHaveText(label);
        expect(button).toHaveClassName(cssClass);
    });

    it('should render raised disabled', () => {
        const label = 'Raised disabled button';
        const raised = true;
        const cssClass = buttoncssClasses.raised;
        const disabled = true;
        const button = shallow(
            <Button raised={raised} label={label} disabled={disabled} />,
        );
        expect(button).toMatchSnapshot();
        expect(button).toHaveText(label);
        expect(button).toHaveClassName(cssClass);
        expect(button).toBeDisabled();
    });

    it('should render dense', () => {
        const label = 'Dense button';
        const dense = true;
        const cssClass = buttoncssClasses.dense;
        const button = shallow(
            <Button label={label} dense={dense} />,
        );
        expect(button).toMatchSnapshot();
        expect(button).toHaveText(label);
        expect(button).toHaveClassName(cssClass);
    });

    it('should render compact', () => {
        const label = 'Compact button';
        const compact = true;
        const cssClass = buttoncssClasses.compact;
        const button = shallow(
            <Button label={label} compact={compact} />,
        );
        expect(button).toMatchSnapshot();
        expect(button).toHaveText(label);
        expect(button).toHaveClassName(cssClass);
    });

    it('should render primary', () => {
        const label = 'Primary button';
        const primary = true;
        const cssClass = buttoncssClasses.primary;
        const button = shallow(
            <Button label={label} primary={primary} />,
        );
        expect(button).toMatchSnapshot();
        expect(button).toHaveText(label);
        expect(button).toHaveClassName(cssClass);
    });
});
