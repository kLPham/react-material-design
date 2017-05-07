import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../index';

describe('<Dialog />', () => {
    it('should render', () => {
        const dialog = shallow(
            <Dialog />,
    );
        expect(dialog).toMatchSnapshot();
    });
});
