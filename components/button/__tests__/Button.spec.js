import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

describe('<Button />', () => {
    it('should render flat', () => {
        const label = 'Flat button';
        const button = shallow(
            <Button label={label} />,
        );
        expect(button).toMatchSnapshot();
    });
    it('shound render darkTheme', () => {
        const label = 'Flat button';
        const darkTheme = true;
        const button = shallow(
            <Button label={label} darkTheme={darkTheme} />,
        );
        expect(button).toMatchSnapshot();
    });
    it('should render colored', () => {
        const label = 'Colored button';
        const colored = true;
        const button = shallow(
            <Button colored={colored} label={label} />,
        );
        expect(button).toMatchSnapshot();
    });

    it('should render raised', () => {
        const label = 'Raised button';
        const raised = true;
        const button = shallow(
            <Button raised={raised} label={label} />,
        );
        expect(button).toMatchSnapshot();
    });

    it('should render raised disabled', () => {
        const label = 'Raised disabled button';
        const raised = true;
        const disabled = true;
        const button = shallow(
            <Button raised={raised} label={label} disabled={disabled} />,
        );
        expect(button).toMatchSnapshot();
    });

    it('should render dense', () => {
        const label = 'Dense button';
        const dense = true;
        const button = shallow(
            <Button label={label} dense={dense} />,
        );
        expect(button).toMatchSnapshot();
    });

    it('should render compact', () => {
        const label = 'Compact button';
        const compact = true;
        const button = shallow(
            <Button label={label} compact={compact} />,
        );
        expect(button).toMatchSnapshot();
    });

    it('should render primary', () => {
        const label = 'Primary button';
        const primary = true;
        const button = shallow(
            <Button label={label} primary={primary} />,
        );
        expect(button).toMatchSnapshot();
    });
});
