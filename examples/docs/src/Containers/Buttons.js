import React from 'react';
import CodeToggle from 'react-code-toggle';
import _ from 'lodash';
import Docs from '../Components/docs';
import componentDoc from '../docs/componentDoc.json';
import { FAB, Button, IconToggle, IconButton } from '../../../../components/react-material-design';

const buttonDocs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/button/'));
const buttonDocsComponent = _.map(buttonDocs, (doc, key) => <Docs key={key} componentDocs={doc} />);
const fabDocs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/fab/'));
const fabDocsComponent = _.map(fabDocs, (doc, key) => <Docs key={key} componentDocs={doc} />);
const iconToggleDocs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/icon-toggle/'));
const iconToggleDocsComponent = _.map(iconToggleDocs, (doc, key) => <Docs key={key} componentDocs={doc} />);

const Buttons = () =>
  (<div>
      <h1>Buttons</h1>
      <section>
          <h2>Floating Action Buttons</h2>
          <h3>Examples of Default, Plain, Mini, Mini Plain, Absolute Bottom Right, and Floating Bottom Left</h3>
          <CodeToggle>
              <FAB icon="settings_input_hdmi" />
              <FAB plain icon="favorite" />
              <FAB mini icon="add" />
              <FAB mini plain icon="mic" />
              <FAB location="absolute-bottom-right" plain icon="g_translate" />
              <FAB location="floating-bottom-left" icon="create_new_folder" />
          </CodeToggle>
          {fabDocsComponent}
          <h2>Flat and Raised Buttons</h2>
          <h3>Flat buttons</h3>
          <CodeToggle>
              <Button label="Flat" />
              <Button label="Colored" colored />
              <Button label="Disabled" disabled />
              <Button label="Disabled Primary" primary disabled />
              <Button label="Dense" dense />
              <Button label="Compact" compact />
              <Button label="Primary" primary />
              <Button label="Ripple Primary" ripple primary />
              <Button label="Ripple Primary" ripple primary />
              <Button label="Ripple Primary" ripple primary />
          </CodeToggle>
          <h3>Raised Buttons</h3>
          <CodeToggle>
              <Button label="Colored Raised" colored raised />
              <Button label="Raised" raised />
              <Button label="Primary Raised" primary raised />
              <Button label="Compact Raised" compact raised />
              <Button label="Dense Raised" dense raised />
              <Button label="Disabled Raised" raised disabled />
          </CodeToggle>
          <h3>Icon Buttons</h3>
          <IconButton icon="menu" />
          {buttonDocsComponent}
          <h2>Toggle Buttons</h2>
          <h3>Icon Toggles</h3>
          <h4>Basic</h4>
          <IconToggle />
          <h4>Disabled</h4>
          <IconToggle icon="star_border" toggledIcon="star" disable />
          <h4>Primary and Accent Colored</h4>
          <IconToggle icon="star_border" toggledIcon="star" primary />
          <IconToggle icon="bookmark_border" toggledIcon="bookmark" accent />
          {iconToggleDocsComponent}
      </section>
  </div>);
export default Buttons;
