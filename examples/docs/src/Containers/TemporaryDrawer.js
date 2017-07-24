import React from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerSpacer } from '../../../../components/react-material-design';

const TemporaryDrawer = () => (
    <Drawer type="temporary" ref={(c) => { this.temporaryDrawer = c; }}>
        <DrawerHeader type="temporary">Header content goes here</DrawerHeader>
        <DrawerContent type="temporary">
            <a className="mdc-list-item mdc-temporary-drawer--selected" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
          </a>
            <DrawerSpacer />
            <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
          </a>
            <DrawerSpacer>I have content</DrawerSpacer>
            <a className="mdc-list-item" href="#">
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
          </a>
        </DrawerContent>
    </Drawer>
);
export default TemporaryDrawer;
