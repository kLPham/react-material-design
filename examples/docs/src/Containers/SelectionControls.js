import React from 'react';
import { Checkbox, Radio, Switch, Select } from '../../../../components/react-material-design';
// import { Checkbox } from 'react-material-design';

const SelectionControls = () =>
    <div>
        <h1>Selection Controls</h1>
        <h2>Checkboxes</h2>
        <Checkbox label="My Checkbox Label" />
        <Checkbox alignEnd label="Align end: My Checkbox Label" />
        <h2>Radio Buttons</h2>
        <Radio disabled label="Disabled Radio 1" />
        <Radio label="Radio 2" />
        <Radio alignEnd label="Align End: Radio 3" />
        <h2>Switches</h2>
        <Switch label="off/on" />
        <Switch disabled label="disabled" />
        <h2>Selects</h2>
        <Select />

    </div>;
export default SelectionControls;
