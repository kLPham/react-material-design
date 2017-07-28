import '@material/dialog/dist/mdc.dialog.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCDialog } from '@material/dialog';
// TODO: trapFocusOnSurface https://www.w3.org/TR/wai-aria-practices/#dialog_modal
/**
* Dialog
*/
class Dialog extends Component {
    componentDidMount() {
        this.dialog = new MDCDialog(this.mainRoot);
    }
    handleOpen = () => {
        this.dialog.foundation_.open();
    }
    handleCancel = () => {
        this.dialog.foundation_.cancel();
    }
    render() {
        const { darkTheme } = this.props;
        return (
            <aside
                id="my-mdc-dialog"
                className={classNames('mdc-dialog', { 'mdc-dialog--theme-dark': darkTheme })}
                ref={(d) => { this.mainRoot = d; }}
                role="alertdialog"
                aria-labelledby="my-mdc-dialog-label"
                aria-describedby="my-mdc-dialog-description"
            >
                <div className="mdc-dialog__surface">
                    <header className="mdc-dialog__header">
                        <h2 id="my-mdc-dialog-label" className="mdc-dialog__header__title">
                            Use Googles location service?
                        </h2>
                    </header>
                    <section id="my-mdc-dialog-description" className="mdc-dialog__body">
                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                    </section>
                    <footer className="mdc-dialog__footer">
                        <button type="button" onClick={this.handleCancel} className={classNames('mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel', { 'mdc-button--theme-dark': darkTheme })}>Decline</button>
                        <button type="button" className={classNames('mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept', { 'mdc-button--theme-dark': darkTheme })}>Accept</button>
                    </footer>
                </div>
                <div className="mdc-dialog__backdrop" />
            </aside>
        );
    }
}
export default Dialog;
