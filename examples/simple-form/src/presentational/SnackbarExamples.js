import React from 'react';
// import { Snackbar } from '../../../../components/react-material-design';
import { Snackbar } from 'react-material-design';
import { Button, Textfield } from 'react-material-design';

const SnackbarExamples = () =>
    <div>
        <Textfield label="Message to be displayed in snackbar" />
        <Button label="Click Me" onClick={() => console.log('Clicked!')} />
        <Snackbar />
    </div>;
export default SnackbarExamples;
