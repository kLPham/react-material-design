import '@material/drawer/dist/mdc.drawer.css';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Set as ImmutableSet } from 'immutable';
import MDCTemporaryDrawer from './component';

// BUG: mdc-temporary-drawer class required in root element.
// TODO: this.foundation.open() from other elements.
// TODO: I'd like to see an implementation of mini to persistent.
class PersistentDrawer extends PureComponent {
    static propTypes = {
        children: PropTypes.any,
    }
    constructor(props) {
        super(props);
        this.state = {
            bodyClasses: new ImmutableSet(),
            classes: new ImmutableSet().add('mdc-persistent-drawer'),
        };
    }
    componentWillMount() {
        this.foundation = new MDCTemporaryDrawer(this);
        this.foundation.init();
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
    openDrawer = () => {
        this.foundation.open();
    }
    closeDrawer = () => {
        this.foundation.close();
    }
    isOpen() {
        console.log('isOpen', this.foundation.isOpen());
    }
    render() {
        const { bodyClasses, classes, drawerclick, drawertouchstart, rootclick, roottouchend, roottouchmove } = this.state;
        const { children } = this.props;
        return (
            <aside
                onClick={rootclick}
                onTouchMove={roottouchmove}
                onTouchEnd={roottouchend}
                className={classNames('mdc-typography', classes.toJS().join(' '))}
            >
                <nav
                    className={classNames('mdc-persistent-drawer__drawer', bodyClasses.toJS().join(' '))}
                    onClick={drawerclick}
                    onTouchStart={drawertouchstart}
                >
                    {children}
                </nav>
            </aside>
        );
    }
}
export default PersistentDrawer;
