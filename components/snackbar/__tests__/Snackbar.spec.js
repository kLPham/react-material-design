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
    it('should render visibleUntilTimeout', () => {
        const visibleUntilTimeout = true;
        const snackbar = shallow(
            <Snackbar visibleUntilTimeout={visibleUntilTimeout} />,
      );
        expect(snackbar).toMatchSnapshot();
    });
});
