import React from 'react';
import _ from 'lodash';
import { Checkbox, Radio, Switch, Select } from '../../../../components/react-material-design';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const checkboxDocs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/checkbox/'));
const checkboxDocsComponent = _.map(checkboxDocs, (doc, key) => <Docs key={key} componentDocs={doc} />);
const radioDocs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/radio/'));
const radioDocsComponent = _.map(radioDocs, (doc, key) => <Docs key={key} componentDocs={doc} />);
const switchDocs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/switch/'));
const switchDocsComponent = _.map(switchDocs, (doc, key) => <Docs key={key} componentDocs={doc} />);
const selectDocs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/select/'));
const selectDocsComponent = _.map(selectDocs, (doc, key) => <Docs key={key} componentDocs={doc} />);

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
      {checkboxDocsComponent}
      <h2>Radio Buttons</h2>
      <Radio disable label="Disabled Radio 1" />
      <Radio label="Radio 2" />
      <Radio alignEnd label="Align End: Radio 3" />
      <Radio checked label="Checked: Radio 4" />
      <Radio name="radios" label="Checked: Radio 4" />
      {radioDocsComponent}
      <h2>Switches</h2>
      <Switch label="off/on" />
      <Switch disable label="disable" />
      {switchDocsComponent}
      <h2>Selects</h2>
      <Select />
      <h3>Disabled</h3>
      <Select disable />
      {selectDocsComponent}
  </div>);
export default SelectionControls;
