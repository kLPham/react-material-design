import React, { PureComponent } from 'react';
import '@material/snackbar/dist/mdc.snackbar.css';
import { Set as ImmutableSet } from 'immutable';
import classNames from 'classnames';
import MDCSnackbar from './component';

// TODO: use this.foundation.show from other elements.
// TODO: this.foundation.show() queue didn't seem to work.
class Snackbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            classes: new ImmutableSet(),
        };
    }
    componentWillMount() {
        const dialog = {
            message: 'Im a message',
            actionText: 'Im action text',
            actionHandler: () => console.log('im action handler'),
        };
        const secondDialog = {
            message: 'Im a second message',
            actionText: 'moar',
            actionHandler: () => console.log('im action handler'),
        };
        this.foundation = new MDCSnackbar(this);
        this.foundation.init();
        this.foundation.show(dialog);
        this.foundation.show(secondDialog);
    }
    render() {
        const { actionAriaHidden, actionText, ariaHidden, classes, click, message } = this.state;
        return (
            <div
                className={classNames('mdc-snackbar', classes.toJS().join(' '))}
                aria-live="assertive"
                aria-atomic="true"
                aria-hidden={ariaHidden}
                onClick={click}
            >
                <div className="mdc-snackbar__text">{message}</div>
                <div className="mdc-snackbar__action-wrapper" aria-hidden={actionAriaHidden}>
                    <button
                        type="button"

                        className="mdc-button mdc-snackbar__action-button"
                    >{actionText}</button>
                </div>
            </div>
        );
    }
}
export default Snackbar;
