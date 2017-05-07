import React from 'react';
import { shallow } from 'enzyme';
import Snackbar from '../index';

describe('<Snackbar />', () => {
    it('should render with a message', () => {
        const message = 'this is my message';
        const snackbar = shallow(
            <Snackbar message={message} />,
    );
        expect(snackbar).toMatchSnapshot();
    });
    it('should render with actionText', () => {
        const message = 'this is my message';
        const actionText = 'submit';
        const snackbar = shallow(
            <Snackbar message={message} actionText={actionText} />,
    );
        expect(snackbar).toMatchSnapshot();
    });
});
