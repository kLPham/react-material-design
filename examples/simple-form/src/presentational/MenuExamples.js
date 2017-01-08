import React from 'react';
import { MenuItem } from 'react-material-design';
import Menu from '../components/menu';

const MenuExamples = () =>
    <div>
        <h2>Menu Example</h2>
        Icon Menu
        <Menu type="button" />
        Dropdown menu?
    </div>;
export default MenuExamples;
//         <div className="toolbar mdc-menu-anchor">
/*
 <MenuItem value="A Menu Item" />
 <MenuItem value="Another Menu Item" />
 Button Menu
 <Button label="click me">
 <Menu type="button">
 <MenuItem value="A Menu Item" />
 <MenuItem value="Another Menu Item" />
 </Menu>
 </Button>*/