import '@material/dialog/dist/mdc.dialog.css';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Set as ImmutableSet } from 'immutable';
import MDCDialog from './component';

// TODO: trapFocusOnSurface https://www.w3.org/TR/wai-aria-practices/#dialog_modal
/**
* Dialog
*/
class Dialog extends PureComponent {
    state = {
        classes: new ImmutableSet().add('mdc-dialog'),
        classesBody: new ImmutableSet().add('mdc-dialog__body').add('mdc-dialog__body--scrollable'),
        styles: { visibility: 'hidden' },
    }
    componentDidMount() {
        this.foundation = new MDCDialog(this);
        this.foundation.open();
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
    render() {
        const { classes, classesBody, rootclick, surfaceclick, styles } = this.state;
        return (
            <aside
                style={styles}
                id="my-mdc-dialog"
                onClick={rootclick}
                className={classNames(classes.toJS().join(' '))}
                role="alertdialog"
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
                    >
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                    </section>
                    <footer className="mdc-dialog__footer">
                        <button type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
                        <button ref={(b) => { this.buttonAccept = b; }} type="button" className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
                    </footer>
                </div>
                <div className="mdc-dialog__backdrop" />
            </aside>
        );
    }
}

export default Dialog;
