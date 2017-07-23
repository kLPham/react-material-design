import '@material/drawer/dist/mdc.drawer.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCPersistentDrawer, MDCTemporaryDrawer } from '@material/drawer';

class Drawer extends Component {
    static propTypes = {
        children: PropTypes.any,
        type: PropTypes.oneOf(['permanent', 'persistent', 'temporary']).isRequired,
    }
    static defaultProps = {
        type: 'temporary',
    }
    state = {
        drawerOpen: false,
    }
    componentDidMount() {
        const { type } = this.props;
        if (type === 'persistent') {
            this.drawer = new MDCPersistentDrawer(this.mainRoot);
            this.drawer.listen('MDCPersistentDrawer:open', () => this.setState({
                drawerOpen: true,
            }));
            this.drawer.listen('MDCPersistentDrawer:close', () => this.setState({
                drawerOpen: false,
            }));
        } else if (type === 'temporary') {
            this.drawer = new MDCTemporaryDrawer(this.mainRoot);
            this.drawer.listen('MDCTemporaryDrawer:open', () => this.setState({
                drawerOpen: true,
            }));
            this.drawer.listen('MDCTemporaryDrawer:close', () => this.setState({
                drawerOpen: false,
            }));
        }
    }
    toggleDrawer = () => {
        const { drawerOpen } = this.state;
        this.drawer.open = !drawerOpen;
    }

    render() {
        const { children, type } = this.props;
        return (
            <aside
                ref={(a) => { this.mainRoot = a; }}
                className={`mdc-${type}-drawer mdc-typography`}
            >
                <nav className={`mdc-${type}-drawer__drawer`}>
                    {children}
                </nav>
            </aside>
        );
    }
}
export default Drawer;
