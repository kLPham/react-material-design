import React from 'react';
import { shallow } from 'enzyme';
import DialogBody from '../dialogBody';

describe('<DialogBody />', () => {
    it('should render', () => {
        const dialogBody = shallow(
            <DialogBody>
                Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </DialogBody>,
        );
        expect(dialogBody).toMatchSnapshot();
    });
});
