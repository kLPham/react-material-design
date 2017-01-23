import React from 'react';
// import { Textfield } from '../../../../components/react-material-design';
import { Textfield } from 'react-material-design';

const TextfieldExamples = () =>
    <div>
        <h2>Textfield Examples and Right Align</h2>
        <br /> <Textfield required label="required, no help text" />
        <br /> <Textfield label="label text" helpText="not persistent" value="I have text" />
        <br /> <Textfield label="label text" helpText="not persistent" />
        <br /> <Textfield alignEnd value="value" label="label text" helpText="not persistent" />
        <br /> <Textfield alignEnd value="enabled, pre-filled, no label, no help text " />
        <br /> <Textfield helpTextPersistent label="label text, not pre-filled" helpText="default persistent" />
        <br /> <Textfield alignEnd helpTextPersistent label="label text, not pre-filled" helpText="alignEnd persisten" />
        <br /> <Textfield alignEnd disabled label="disabled, no help text" value="pre-filled" />

    </div>;
export default TextfieldExamples;
