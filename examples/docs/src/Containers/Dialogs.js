import React from 'react';
import _ from 'lodash';
import { Dialog, DialogBody, Button } from '../../../../components/react-material-design';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/dialog/'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);

const footerButtonConfig = [
    {
        type: 'cancel',
        label: 'Decline',
    }, {
        type: 'accept',
        label: 'Accept',
    },
];
const Dialogs = () => (
    <div>
        <h2>Dialogs</h2>
        <Button onClick={() => this.dialog1.handleOpen()} label="Show Dialog" />
        <Dialog
          headerTitle="Use Googles location service?"
          footerActions={footerButtonConfig}
          ref={(d) => { this.dialog1 = d; }}
        >
            <DialogBody>
                Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </DialogBody>
        </Dialog>
        {docsComponent}
    </div>
  );
export default Dialogs;
