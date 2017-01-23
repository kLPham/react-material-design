import React, { PureComponent } from 'react';
import '@material/drawer/dist/mdc.drawer.css';
import classNames from 'classnames';
import { Set as ImmutableSet } from 'immutable';
import MDCTemporaryDrawer from './component';

// TODO: this.foundation.open() from other elements.
// TODO: I'd like to see an implementation of mini to persistent.
class PersistentDrawer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            classes: new ImmutableSet().add('mdc-temporary-drawer'),
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
        const { classes, rootclick, roottouchmove, roottouchend, drawerclick, drawertouchstart } = this.state;
        const { children } = this.props;
        return (
            <aside
                onClick={rootclick}
                onTouchMove={roottouchmove}
                onTouchEnd={roottouchend}
                className={classNames('mdc-typography', classes.toJS().join(' '))}
            >
                <nav
                    className="mdc-temporary-drawer__drawer"
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
