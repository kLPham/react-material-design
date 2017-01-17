import React from 'react';
import { Button, Menu, MenuItem } from 'react-material-design';

const MenuExamples = () =>
    <div>
        <h2>Menu Example</h2>
        Button Menu
        <Menu label="Clickie" type="button">
            <MenuItem value="An Item" />
            <MenuItem value="Another Item" />
        </Menu>
        Button Menu disabled
        <Menu disabled label="No Clickie" type="button">
            <MenuItem value="An Item" />
            <MenuItem value="Another Item" />
        </Menu>
        Icon Menu
        Dropdown menu?
        Button Menu
        <Button label="click me">
            <Menu type="button">
                <MenuItem value="A Menu Item" />
                <MenuItem value="Another Menu Item" />
            </Menu>
        </Button>
    </div>;
export default MenuExamples;
