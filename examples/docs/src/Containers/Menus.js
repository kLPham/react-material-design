import React from 'react';
import { Button, Menu, MenuItem } from '../../../../components/react-material-design';
// import { Button, Menu, MenuItem } from 'react-material-design';

const Menus = () =>
  (<div>
      <h1>Menus</h1>
      <h2>Button Menu</h2>
      <Menu parentLabel="Click Me">
          <MenuItem value="An Item" />
          <MenuItem value="Another Item" />
      </Menu>
      <h2>Button Menu disabled</h2>
      <Menu parentLabel="Click Me" disabled>
          <MenuItem value="An Item" />
          <MenuItem value="Another Item" />
      </Menu>
      <h2>Icon Menu</h2>
      <h2>Dropdown menu?</h2>
      <h2>Button Menu</h2>
      <Menu parentLabel="Click Me">
      <MenuItem value="A Menu Item" />
      <MenuItem value="Another Menu Item" />
    </Menu>

  </div>);
export default Menus;
