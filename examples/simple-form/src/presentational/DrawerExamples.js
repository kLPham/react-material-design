// import { Drawer } from 'react-material-design';
import { Button, Drawer, PersistentDrawer, DrawerContent, DrawerHeader, DrawerSpacer } from '../../../../components/react-material-design';
import React, { PureComponent } from 'react';

class DrawerExamples extends PureComponent {
    openDrawer = () => this.drawer.openDrawer();
    render() {
        return (
            <div>
                <PersistentDrawer ref={(c) => { this.drawer = c; }}>
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
                </PersistentDrawer>
                <Button onClick={this.openDrawer} type="raised" label="Open Drawer" />
            </div>
        );
    }
}

export default DrawerExamples;
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
