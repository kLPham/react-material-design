import React from 'react';
import _ from 'lodash';
import jsxToString from 'jsx-to-string';
import Playground from 'component-playground';
import { Checkbox, Menu, MenuItem, Radio, Switch, Select } from '../../../../components/react-material-design';
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
      <Playground
        collapsableCode
        codeText={jsxToString(
            <code>
                <Checkbox />
                <Checkbox label="My Checkbox Label" />
                <Checkbox checked label="My Checkbox Label" />
                <Checkbox label="Disabled" disable />
                <Checkbox label="Indeterminate" indeterminate />
            </code>)}
        scope={{ React, Checkbox }}
      />
      {checkboxDocsComponent}
      <h2>Radio Buttons</h2>
      <Playground
        collapsableCode
        codeText={jsxToString(
            <code>
                <Radio label="Radio 2" />
                <Radio disable label="Disabled Radio 1" />
                <Radio alignEnd label="Align End: Radio 3" />
                <Radio checked label="Checked: Radio 4" />
            </code>)}
        scope={{ React, Radio }}
      />
      {radioDocsComponent}
      <h2>Switches</h2>
      <Playground
        collapsableCode
        codeText={jsxToString(
            <code>
                <Switch label="off/on" />
                <Switch disable label="disable" />
            </code>)}
        scope={{ React, Switch }}
      />
      {switchDocsComponent}
      <h2>Selects</h2>
      <Playground
        collapsableCode
        codeText={jsxToString(
            <code>
                <Select label="Pick a Pick a food group">
                    <Menu selectMenu>
                        <MenuItem value="Bread, Cereal, Rice, and Pasta" />
                        <MenuItem value="Vegetables" />
                        <MenuItem value="Fruit" />
                        <MenuItem value="Milk, Yogurt, and Cheese" />
                        <MenuItem value="Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts" />
                        <MenuItem value="Fats, Oils, and Sweets" />
                    </Menu>
                </Select>
                <Select label="Selection Disabled" disable>
                    <Menu selectMenu>
                        <MenuItem value="Bread, Cereal, Rice, and Pasta" />
                        <MenuItem value="Vegetables" />
                        <MenuItem value="Fruit" />
                        <MenuItem value="Milk, Yogurt, and Cheese" />
                        <MenuItem value="Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts" />
                        <MenuItem value="Fats, Oils, and Sweets" />
                    </Menu>
                </Select>
                <Select label="Menu Items Disabled">
                    <Menu selectMenu>
                        <MenuItem disable value="Bread, Cereal, Rice, and Pasta" />
                        <MenuItem value="Vegetables" />
                        <MenuItem disable value="Fruit" />
                        <MenuItem value="Milk, Yogurt, and Cheese" />
                        <MenuItem value="Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts" />
                        <MenuItem value="Fats, Oils, and Sweets" />
                    </Menu>
                </Select>
            </code>)}
        scope={{ React, Select, Menu, MenuItem }}
      />
      {selectDocsComponent}
  </div>);
export default SelectionControls;
