import '@material/dialog/dist/mdc.dialog.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCDialog } from '@material/dialog';

// TODO: Scrollable
/** Dialog */
class Dialog extends Component {
    static propTypes = {
        /** Must be a <DialogBody /> */
        children: PropTypes.element.isRequired,
        /** Used to construct footer actions. Must be an array of object(s). The object must have label, and type. Type must be either cancel or accept */
        footerActions: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                type: PropTypes.oneOf(['cancel', 'accept']).isRequired,
                onClick: PropTypes.func,
            }),
        ).isRequired,
        darkTheme: PropTypes.bool,
        headerTitle: PropTypes.string.isRequired,
    }
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
        const { children, darkTheme, footerActions, headerTitle } = this.props;
        return (
            <aside
                className={classNames('mdc-dialog', { 'mdc-dialog--theme-dark': darkTheme })}
                ref={(d) => { this.mainRoot = d; }}
                role="alertdialog"
                aria-labelledby="my-mdc-dialog-label"
                aria-describedby="my-mdc-dialog-description"
            >
                <div className="mdc-dialog__surface">
                    <header className="mdc-dialog__header">
                        <h2 className="mdc-dialog__header__title">
                            {headerTitle}
                        </h2>
                    </header>
                    {children}
                    <footer className="mdc-dialog__footer">
                        {footerActions.map((action, index) =>
                        (<button
                            key={index}
                            type="button"
                            onClick={action.type === 'cancel' ? this.handleCancel : action.onClick}
                            className={classNames('mdc-button', 'mdc-dialog__footer__button', `mdc-dialog__footer__button--${action.type}`, { 'mdc-button--theme-dark': darkTheme })}
                        >
                            {action.label}
                        </button>),

                    )}
                    </footer>
                </div>
                <div className="mdc-dialog__backdrop" />
            </aside>
        );
    }
}
export default Dialog;
