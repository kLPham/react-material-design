import React from 'react';
import { Button, Menu, MenuItem } from '../../../../components/react-material-design';
// import { Button, Menu, MenuItem } from 'react-material-design';

const Menus = () =>
    <div>
        <h1>Menus</h1>
        <h2>Button Menu</h2>
        <Menu label="Clickie" type="button">
            <MenuItem value="An Item" />
            <MenuItem value="Another Item" />
        </Menu>
        <h2>Button Menu disabled</h2>
        <Menu disabled label="No Clickie" type="button">
            <MenuItem value="An Item" />
            <MenuItem value="Another Item" />
        </Menu>
        <h2>Icon Menu</h2>
        <h2>Dropdown menu?</h2>
        <h2>Button Menu</h2>
        <Button label="click me">
            <Menu type="button">
                <MenuItem value="A Menu Item" />
                <MenuItem value="Another Menu Item" />
            </Menu>
        </Button>
    </div>;
export default Menus;
