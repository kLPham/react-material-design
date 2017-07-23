import React from 'react';
import { Checkbox, Radio, Switch, Select } from '../../../../components/react-material-design';
// import { Checkbox } from 'react-material-design';

const SelectionControls = () =>
  (<div>
      <h1>Selection Controls</h1>
      <h2>Checkboxes</h2>
      <Checkbox />
      <Checkbox label="My Checkbox Label" />
      <Checkbox checked label="My Checkbox Label" />

    <h3>Disabled</h3>
    <Checkbox label="Disabled" disable />
    <h3>Indeterminate</h3>
    <Checkbox label="Indeterminate" indeterminate />
    <h2>Radio Buttons</h2>
    <Radio disable label="Disabled Radio 1" />
    <Radio label="Radio 2" />
    <Radio alignEnd label="Align End: Radio 3" />
    <Radio checked label="Checked: Radio 4" />
    <Radio name="radios" label="Checked: Radio 4" />

    <h2>Switches</h2>
    <Switch label="off/on" />
    <Switch disable label="disable" />
    <h2>Selects</h2>
    <Select />
    <h3>Disabled</h3>
    <Select disable />

  </div>);
export default SelectionControls;
