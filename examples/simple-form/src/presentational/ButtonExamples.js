import React from 'react';
// import { Button } from '../../../../components/react-material-design';
import { Button } from 'react-material-design';

const ButtonExamples = () =>
    <div>
        <h2>Button Examples</h2>
        <Button label="Flat" />
        <Button label="Colored" colored />
        <Button label="Colored Raised" colored raised />
        <Button label="Raised" raised />
        <Button label="Disabled" disabled />
        <Button label="Disabled Primary" primary disabled />
        <Button label="Disabled Raised" raised disabled />
        <Button label="Dense" dense />
        <Button label="Dense Raised" dense raised />
        <Button label="Compact" compact />
        <Button label="Compact Raised" compact raised />
        <Button label="Primary" primary />
        <Button label="Primary Raised" primary raised />
        <Button label="Ripple Primary" ripple primary />
        <Button label="Ripple Primary" ripple primary imnotinlist />


    </div>;
export default ButtonExamples;
