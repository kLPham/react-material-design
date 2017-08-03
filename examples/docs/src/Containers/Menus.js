import React from 'react';
import _ from 'lodash';
import { Button, Menu, MenuItem } from '../../../../components/react-material-design';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/menu/'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);

const Menus = () =>
  (<div>
      <h1>Menus</h1>
      <h2>Button Menu</h2>
      <Button label="Show Menu" onClick={() => this.menu1.handleOpen()} />
      <Menu ref={(m) => { this.menu1 = m; }}>
          <MenuItem value="An Item" />
          <MenuItem value="Another Item" />
      </Menu>
      <h3>Focused</h3>
      <Button label="Show Menu" onClick={() => this.menu2.handleOpen(1)} />
      <Menu ref={(m) => { this.menu2 = m; }}>
          <MenuItem value="An Item" />
          <MenuItem value="Another Item" />
      </Menu>
      <h2>Button Menu Item Disabled</h2>
      <Button label="Show Menu" onClick={() => this.menu3.handleOpen()} />

      <Menu ref={(m) => { this.menu3 = m; }} disabled>
          <MenuItem value="An Item" />
          <MenuItem disable value="Another Item" />
      </Menu>
      <h2>Icon Menu</h2>
      <h2>Dropdown menu?</h2>
      <h2>Button Menu</h2>
      <Button label="Show Menu" onClick={() => this.menu4.handleOpen()} />

      <Menu ref={(m) => { this.menu4 = m; }}>
          <MenuItem value="A Menu Item" />
          <MenuItem value="Another Menu Item" />
      </Menu>
      {docsComponent}
  </div>);
export default Menus;
