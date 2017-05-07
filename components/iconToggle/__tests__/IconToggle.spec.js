import React from 'react';
import { shallow } from 'enzyme';
import IconToggle from '../index';

describe('<IconToggle />', () => {
    it('should be able to render', () => {
        const icon = 'favorite_border';
        const iconToggle = shallow(
            <IconToggle icon={icon} />,
  );
        expect(iconToggle).toMatchSnapshot();
    });
    it('should render disabled', () => {
        const icon = 'favorite_border';
        const disabled = true;
        const iconToggle = shallow(
            <IconToggle icon={icon} disabled={disabled} />,
  );
        expect(iconToggle).toMatchSnapshot();
    });
    it('should render primary', () => {
        const icon = 'favorite_border';
        const primary = true;
        const iconToggle = shallow(
            <IconToggle icon={icon} primary={primary} />,
  );
        expect(iconToggle).toMatchSnapshot();
    });
    it('should render accent', () => {
        const icon = 'favorite_border';
        const accent = true;
        const iconToggle = shallow(
            <IconToggle icon={icon} accent={accent} />,
  );
        expect(iconToggle).toMatchSnapshot();
    });
});
