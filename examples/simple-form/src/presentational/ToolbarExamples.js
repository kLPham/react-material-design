import React from 'react';
import { Toolbar } from '../../../../components/react-material-design';
// import { Toolbar } from 'react-material-design';

// TODO: fixed toolbar hides header.
const ToolbarExamples = () =>
    <div>
        <h2>Toolbar Examples</h2>
        <Toolbar
            title="Title"
            leftElements={<a className="material-icons">menu</a>}
        />
        {/* <Toolbar
            fixed
            title="Fixed Title"
            startElement={<a className="material-icons">menu</a>}
        /> */}

    </div>;
export default ToolbarExamples;
