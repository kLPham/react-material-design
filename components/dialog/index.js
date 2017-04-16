import React, { PureComponent } from 'react';
import '@material/dialog/dist/mdc.dialog.css';
import { Set as ImmutableSet } from 'immutable';
import classNames from 'classnames';
import MDCDialog from './component';

class Dialog extends PureComponent {
    state = {
        classes: new ImmutableSet().add('mdc-dialog'),
        classesBody: new ImmutableSet().add('mdc-dialog__body'),
    }
    componentDidMount() {
        this.foundation = new MDCDialog(this);
        this.foundation.open();
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
    render() {
        const { classes, classesBody, rootclick, surfaceclick } = this.state;
        return (
            <aside
                id="my-mdc-dialog"
                onClick={rootclick}
                className={classNames(classes.toJS().join(' '))}
                role="alertdialog"
                aria-hidden={this.state['aria-hidden']}
                aria-labelledby="my-mdc-dialog-label"
                aria-describedby="my-mdc-dialog-description"
            >
                <div className="mdc-dialog__surface" onClick={surfaceclick}>
                    <header className="mdc-dialog__header">
                        <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">
                            Use Googles location service?
                        </h2>
                    </header>
                    <section
                        id="my-mdc-dialog-description"
                        className={classNames(classesBody.toJS().join(' '))}
                        aria-hidden={this.state['bodyaria-hidden']}
                    >
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                    </section>
                    <footer className="mdc-dialog__footer">
                        <button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
                        <button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
                    </footer>
                </div>
                <div className="mdc-dialog__backdrop" />
            </aside>
        );
    }
}

export default Dialog;
