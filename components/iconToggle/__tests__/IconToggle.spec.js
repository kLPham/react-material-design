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
});
