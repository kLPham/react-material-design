import React from 'react';
import { Route } from 'react-router-dom';
import { Dialog, Drawer, DrawerContent, DrawerHeader, DrawerSpacer, IconButton, List, ListItem, Textfield, Toolbar } from '../../../components/react-material-design';
import Buttons from './Containers/Buttons';
import Cards from './Containers/Cards';
import Dialogs from './Containers/Dialogs';
import Lists from './Containers/Lists';
import Menus from './Containers/Menus';
import SelectionControls from './Containers/SelectionControls';
import SnackbarsToasts from './Containers/SnackbarsToasts';
import Textfields from './Containers/Textfields';
import Navigation from './Containers/Navigation';

const styles = {
  //  boxSizing: 'border-box',
    display: 'flex',
    height: '100vh',
};

// TODO: Drawer to scroll if out of view.

const Layout = ({ location }) => {
    const reg = /\/|\-/g;
    const titleCase = str => str.toLowerCase().split(reg).map(word =>
    `${word.charAt(0).toUpperCase()}${word.slice(1)}`,
  );
    const breadCrumbs = titleCase(location);
    breadCrumbs.shift();
    return (<div>
        <Toolbar
            startElements={<IconButton primary icon="menu" />}
            title={breadCrumbs.join(' – ')}
            endElements={<Textfield primary label="Search" />}
        />
        <section
            className="content"
            style={styles}
        >
            <Drawer>
                <DrawerHeader primary>React Material Design</DrawerHeader>
                {/* <h3>Setup</h3>
                    <DrawerContent>
                    <List>
                        <ListItem to="/setup/getting-started/" value="Getting Started" />
                    </List>
                    </DrawerContent>
                <DrawerSpacer /> */}
                <h3>Components</h3>
                <DrawerContent>
                    <List>
                        <ListItem to="/components/dialogs" value="Dialogs" />
                        <ListItem to="/components/buttons" value="Buttons" />
                        <ListItem to="/components/cards" value="Cards" />
                        <ListItem to="/components/lists" value="Lists" />
                        <ListItem to="/components/menus" value="Menus" />
                        <ListItem to="/components/selection-controls" value="Selection Controls" />
                        <ListItem to="/components/snackbars-toasts" value="Snackbars and Toasts" />
                        <ListItem to="/components/textfields" value="Textfields" />
                    </List>
                </DrawerContent>
                <DrawerSpacer />
                <h3>Patterns</h3>
                <DrawerContent>
                    <List>
                        <ListItem to="/patterns/navigation" value="Navigation" />
                    </List>
                </DrawerContent>
            </Drawer>
            <main style={{ paddingLeft: '16px', maxWidth: '84vw' }}>
                <Route exact path="/" render={() => <div><h1>Welcome</h1><Dialog /></div>} />
                <Route path="/components/dialogs" component={Dialogs} />
                <Route path="/components/buttons" component={Buttons} />
                <Route path="/components/cards" component={Cards} />
                <Route path="/components/lists" component={Lists} />
                <Route path="/components/menus" component={Menus} />
                <Route path="/components/selection-controls" component={SelectionControls} />
                <Route path="/components/snackbars-toasts" component={SnackbarsToasts} />
                <Route path="/components/textfields" component={Textfields} />
                <Route path="/patterns/navigation" component={Navigation} />
            </main>
        </section>
    </div>);
};
export default Layout;
