import React from 'react';
import { shallow } from 'enzyme';
import Snackbar from '../index';

describe('<Snackbar />', () => {
    it('should render', () => {
        const snackbar = shallow(
            <Snackbar />,
    );
        expect(snackbar).toMatchSnapshot();
    });
});
