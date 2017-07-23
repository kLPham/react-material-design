import React from 'react';
import { shallow } from 'enzyme';
import IconToggle from '../index';

describe('<IconToggle />', () => {
    it('should be able to render', () => {
        const iconToggle = shallow(
            <IconToggle />,
  );
        expect(iconToggle).toMatchSnapshot();
    });
    it('should render disabled', () => {
        const disabled = true;
        const iconToggle = shallow(
            <IconToggle disabled={disabled} />,
  );
        expect(iconToggle).toMatchSnapshot();
    });
    it('should render primary', () => {
        const primary = true;
        const iconToggle = shallow(
            <IconToggle primary={primary} />,
  );
        expect(iconToggle).toMatchSnapshot();
    });
    it('should render accent', () => {
        const accent = true;
        const iconToggle = shallow(
            <IconToggle accent={accent} />,
  );
        expect(iconToggle).toMatchSnapshot();
    });
    it('shound render with custom icons', () => {
        const icon = 'star_border';
        const toggledIcon = 'star';
        const iconToggle = shallow(
            <IconToggle icon={icon} toggledIcon={toggledIcon} />,
      );
        expect(iconToggle).toMatchSnapshot();
    });
});
