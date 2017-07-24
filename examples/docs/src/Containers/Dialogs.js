import React from 'react';
import { Dialog, Button } from '../../../../components/react-material-design';
// import { Dialog } from 'react-material-design';

const Dialogs = () => (
    <div>
        <h2>Dialogs</h2>
        <Button onClick={() => this.dialog1.handleOpen()} label="Show Dialog" />
        <Dialog ref={(d) => { this.dialog1 = d; }} />
    </div>
  );
export default Dialogs;
