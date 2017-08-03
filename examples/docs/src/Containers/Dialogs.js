import React from 'react';
import _ from 'lodash';
import { Dialog, Button } from '../../../../components/react-material-design';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/dialog/'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);

const Dialogs = () => (
    <div>
        <h2>Dialogs</h2>
        <Button onClick={() => this.dialog1.handleOpen()} label="Show Dialog" />
        <Dialog ref={(d) => { this.dialog1 = d; }} />
        {docsComponent}
    </div>
  );
export default Dialogs;
