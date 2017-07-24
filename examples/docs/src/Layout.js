import React from 'react';
import { Route } from 'react-router-dom';
import Buttons from './Containers/Buttons';
import Cards from './Containers/Cards';
import Dialogs from './Containers/Dialogs';
import GettingStarted from './Containers/GettingStarted';
import GridLists from './Containers/GridLists';
import LayoutGrids from './Containers/LayoutGrids';
import Lists from './Containers/Lists';
import Menus from './Containers/Menus';
import Navigation from './Containers/Navigation';
import ProgressActivty from './Containers/ProgressActivity';
import Root from './Containers/Root';
import SelectionControls from './Containers/SelectionControls';
import Sliders from './Containers/Sliders';
import SnackbarsToasts from './Containers/SnackbarsToasts';
import Tabs from './Containers/Tabs';
import TemporaryDrawer from './Containers/TemporaryDrawer';
import Textfields from './Containers/Textfields';
import { Drawer, DrawerContent, DrawerSpacer, IconButton, List, ListItem, Textfield, Toolbar } from '../../../components/react-material-design';

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

const routes = [
{ section: 'components', path: '/components/buttons', value: 'Buttons', main: () => <Buttons /> },
{ section: 'components', path: '/components/cards', value: 'Cards', main: () => <Cards /> },
{ section: 'components', path: '/components/dialogs', value: 'Dialogs', main: () => <Dialogs /> },
{ section: 'components', path: '/components/grid-lists', value: 'Grid Lists', main: () => <GridLists /> },
{ section: 'components', path: '/components/lists', value: 'Lists', main: () => <Lists /> },
{ section: 'components', path: '/components/menus', value: 'Menus', main: () => <Menus /> },
{ section: 'components', path: '/components/progress-activity', value: 'Progress and Activity', main: () => <ProgressActivty /> },
{ section: 'components', path: '/components/selection-controls', value: 'Selection Controls', main: () => <SelectionControls /> },
{ section: 'components', path: '/components/sliders', value: 'Sliders', main: () => <Sliders /> },
{ section: 'components', path: '/components/snackbars-toasts', value: 'Snackbars and Toasts', main: () => <SnackbarsToasts /> },
{ section: 'components', path: '/components/tabs', value: 'Tabs', main: () => <Tabs /> },
{ section: 'components', path: '/components/textfields', value: 'Textfields', main: () => <Textfields /> },
{ section: 'layout', path: '/layout/responsive-ui-grid', value: 'Responsive UI', main: () => <LayoutGrids /> },
{ section: 'patterns', path: '/patterns/navigation', value: 'Navigation', main: () => <Navigation /> },
{ section: 'root', path: '/', exact: true, value: 'Home', main: () => <Root /> },
{ section: 'setup', path: '/setup/getting-started/', value: 'Getting Started', main: () => <GettingStarted /> },
];
const Layout = () => (
    <div>
        <TemporaryDrawer />
        <Toolbar
          fixed
          leftElements={<IconButton primary icon="menu" onClick={() => this.temporaryDrawer.toggleDrawer()} />}
          title={routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                render={() =>
                    <span>{`React Material Design - ${route.value}`}</span>
                                    }
              />
                    ))}
          rightElements={<Textfield primary label="Search" />}
        />

        <section
          className="content mdc-toolbar-fixed-adjust"
          style={contentStyles}
        >
            <Drawer type="permanent">
                <DrawerContent type="permanent">
                    <h4>Setup</h4>
                    <List>
                        {
                            routes.filter(f =>
                            f.section === 'setup').map((route, index) => (
                                <ListItem
                                  key={index}
                                  to={route.path}
                                  value={route.value}
                                />
                            ))
                        }
                    </List>
                    <DrawerSpacer type="permanent" />
                    <h4>Components</h4>
                    <List>
                        {
                              routes.filter(f =>
                              f.section === 'components').map((route, index) => (
                                  <ListItem
                                    key={index}
                                    to={route.path}
                                    value={route.value}
                                  />
                              ))
                        }
                    </List>
                    <DrawerSpacer type="permanent" />
                    <h4>Layout</h4>
                    <List>
                        {
                            routes.filter(f =>
                                    f.section === 'layout',
                            ).map((route, index) => (
                                <ListItem
                                  key={index}
                                  to={route.path}
                                  value={route.value}
                                />
                            ))
                      }
                    </List>
                    <DrawerSpacer type="permanent" />
                    <h4>Patterns</h4>
                    <List>
                        {
                            routes.filter(f =>
                                    f.section === 'patterns',
                            ).map((route, index) => (
                                <ListItem
                                  key={index}
                                  to={route.path}
                                  value={route.value}
                                />
                            ))
                        }
                    </List>
                </DrawerContent>
            </Drawer>
            <main style={mainStyles}>
                {routes.map((route, index) => (
                    <Route
                      key={index}
                      exact={route.exact}
                      path={route.path}
                      component={route.main}
                    />
                            ))}
            </main>
        </section>
    </div>
  );
export default Layout;
