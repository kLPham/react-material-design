// import { Drawer } from 'react-material-design';
import React, { PureComponent } from 'react';
import { Button, Drawer, PersistentDrawer, DrawerContent, DrawerHeader, DrawerSpacer } from '../../../../components/react-material-design';

class Navigation extends PureComponent {
    openDrawer = () => this.drawer.openDrawer();
    render() {
        return (
            <div>
                <h3>Click the menu icon above to open and close the drawer</h3>
                <PersistentDrawer ref={(c) => { this.drawer = c; }}>
                    <DrawerHeader primary type="persistent">Header content goes here</DrawerHeader>
                    <DrawerContent type="persistent">
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
                </PersistentDrawer>
                <main>
                    <Button onClick={this.openDrawer} type="raised" label="Open Drawer" />
              </main>
            </div>
        );
    }
}

export default Navigation;
/*
<Drawer>
    <DrawerHeader>Header content goes here</DrawerHeader>
    <DrawerContent>
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

*/
