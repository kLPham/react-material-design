import React from 'react';
import { Textfield } from 'react-material-design';

const InputExamples = () =>
    <div>
        <h2>Textfield Examples and Right Align</h2>
        <Textfield labelText="label text" helpText="not persistent" />
        <Textfield alignEnd value="value" labelText="label text" helpText="not persistent" />
        <Textfield alignEnd value="enabled, pre-filled, no label, no help text " />
        <br />
        <Textfield alignEnd helpTextPersistent labelText="label text, not pre-filled" helpText="persistent: okay, how can I help?" />
        <Textfield alignEnd disabled labelText="disabled, no help text" value="pre-filled" />
    </div>;
export default InputExamples;
