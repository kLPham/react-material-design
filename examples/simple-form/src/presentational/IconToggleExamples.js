import React from 'react';
// import { IconToggle } from '../../../../components/react-material-design';
import { IconToggle } from 'react-material-design';

const IconToggleExamples = () =>
    <div>
        <h2>Icon Toggle Examples</h2>
        basic
        <IconToggle icon="favorite_border" />
        <IconToggle icon="code" />
        disabled
        <IconToggle icon="code" disabled />
    </div>;
export default IconToggleExamples;
