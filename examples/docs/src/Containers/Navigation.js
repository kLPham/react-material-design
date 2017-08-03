import React, { PureComponent } from 'react';
import _ from 'lodash';
import { Button, Drawer, DrawerContent, DrawerHeader, DrawerSpacer } from '../../../../components/react-material-design';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/drawer/'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);

class Navigation extends PureComponent {
    render() {
        return (
            <div>
                <h2>Navigation</h2>
                <h3>Temporary Drawer</h3>
                <p>Click the menu icon above to open and close the drawer.</p>
                {docsComponent}                
                <h3>Persistent Drawer</h3>
                <Button onClick={() => this.persistentDrawer.toggleDrawer()} type="raised" label="Toggle Drawer" />
                <Drawer type="persistent" ref={(c) => { this.persistentDrawer = c; }}>
                    <DrawerHeader type="persistent">Header content goes here</DrawerHeader>
                    <DrawerContent type="persistent">
                        <a className="mdc-list-item mdc-persistent-drawer--selected" href="#">
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
            </div>
        );
    }
}

export default Navigation;
