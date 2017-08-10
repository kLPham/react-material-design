import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../index';
import DialogBody from '../dialogBody';

describe('<Dialog />', () => {
    it('should render', () => {
        const headerTitle = 'Use Googles location service?';
        const footerButtonConfig = [
            {
                type: 'cancel',
                label: 'Decline',
            }, {
                type: 'accept',
                label: 'Accept',
            },
        ];
        const dialog = shallow(
            <Dialog
                headerTitle={headerTitle}
                ref={(d) => { this.dialog1 = d; }}
                footerActions={footerButtonConfig}
            >
                <DialogBody>
                  Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
              </DialogBody>
            </Dialog>,
    );
        expect(dialog).toMatchSnapshot();
    });
});
