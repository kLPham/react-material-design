import React from 'react';
import { Route } from 'react-router-dom';
import { Dialog, Drawer, DrawerContent, DrawerHeader, DrawerSpacer, IconButton, List, ListItem, PersistentDrawer, Textfield, Toolbar } from '../../../components/react-material-design';
import Buttons from './Containers/Buttons';
import Cards from './Containers/Cards';
import Dialogs from './Containers/Dialogs';
import GettingStarted from './Containers/GettingStarted';
import GridLists from './Containers/GridLists';
import LayoutGrids from './Containers/LayoutGrids';
import Lists from './Containers/Lists';
import Menus from './Containers/Menus';
import ProgressActivty from './Containers/ProgressActivity';
import Root from './Containers/Root';
import SelectionControls from './Containers/SelectionControls';
import SnackbarsToasts from './Containers/SnackbarsToasts';
import Sliders from './Containers/Sliders';
import Tabs from './Containers/Tabs';
import Textfields from './Containers/Textfields';
import Navigation from './Containers/Navigation';

const contentStyles = {
    display: 'flex',
    flex: '1 1 auto',
    height: '100%',
    boxSizing: 'border-box',
};
const mainStyles = {
    paddingLeft: '16px',
    display: 'block',
};

const Layout = ({ location }) => {
    const reg = /\/|\-/g;
    const titleCase = str => str.toLowerCase().split(reg).map(word =>
    `${word.charAt(0).toUpperCase()}${word.slice(1)}`,
  );
    const breadCrumbs = titleCase(location);
    breadCrumbs.shift();
    return (<div>
        <Toolbar
            fixed
            leftElements={<IconButton primary icon="menu" onClick={() => this.drawer.openDrawer()} />}
            title={breadCrumbs.join(' – ')}
            rightElements={<Textfield primary label="Search" />}
        />
        <PersistentDrawer ref={(c) => { this.drawer = c; }}>
            <DrawerHeader type="persistent">Header content goes here</DrawerHeader>
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
        <section
            className="content mdc-toolbar-fixed-adjust"
            style={contentStyles}
        >
            <Drawer type="permanent">
                <DrawerContent type="permanent">
                    <h3>Setup</h3>
                    <List>
                        <ListItem to="/setup/getting-started/" value="Getting Started" />
                    </List>
                    <DrawerSpacer type="permanent" />
                    <h3>Components</h3>
                    <List>
                        <ListItem to="/components/grid-lists" value="Grid Lists" />
                        <ListItem to="/components/dialogs" value="Dialogs" />
                        <ListItem to="/components/buttons" value="Buttons" />
                        <ListItem to="/components/cards" value="Cards" />
                        <ListItem to="/components/lists" value="Lists" />
                        <ListItem to="/components/menus" value="Menus" />
                        <ListItem to="/components/selection-controls" value="Selection Controls" />
                        <ListItem to="/components/snackbars-toasts" value="Snackbars and Toasts" />
                        <ListItem to="/components/sliders" value="Sliders" />
                        <ListItem to="/components/textfields" value="Textfields" />
                        <ListItem to="/components/tabs" value="Tabs" />
                        <ListItem to="/components/progress-activity" value="Progress and Activity" />
                    </List>
                    <DrawerSpacer type="permanent" />
                    <h3>Layout</h3>
                    <List>
                        <ListItem to="/layout/responsive-ui-grid" value="Responsive UI" />
                    </List>
                    <DrawerSpacer type="permanent" />
                    <h3>Patterns</h3>
                    <List>
                        <ListItem to="/patterns/navigation" value="Navigation" />
                    </List>
                </DrawerContent>
            </Drawer>
            <main style={mainStyles}>
                <Route exact path="/" component={Root} />
                <Route path="/setup/getting-started" component={GettingStarted} />
                <Route path="/components/grid-lists" component={GridLists} />
                <Route path="/components/dialogs" component={Dialogs} />
                <Route path="/components/buttons" component={Buttons} />
                <Route path="/components/cards" component={Cards} />
                <Route path="/components/lists" component={Lists} />
                <Route path="/components/menus" component={Menus} />
                <Route path="/components/progress-activity" component={ProgressActivty} />
                <Route path="/components/selection-controls" component={SelectionControls} />
                <Route path="/components/snackbars-toasts" component={SnackbarsToasts} />
                <Route path="/components/sliders" component={Sliders} />
                <Route path="/components/tabs" component={Tabs} />
                <Route path="/components/textfields" component={Textfields} />
                <Route path="/patterns/navigation" component={Navigation} />
                <Route path="/layout/responsive-ui-grid" component={LayoutGrids} />
            </main>
        </section>
    </div>);
};
export default Layout;
