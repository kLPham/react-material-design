import React, { PureComponent } from 'react';
import '@material/snackbar/dist/mdc.snackbar.css';
import { Set as ImmutableSet } from 'immutable';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MDCSnackbar from './component';

// TODO: use this.foundation.show from other elements.
// TODO: this.foundation.show() queue didn't seem to work.
// TODO: doesn't show next snackbar messages.
class Snackbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            classes: new ImmutableSet(),
        };
    }
    componentWillMount() {
        this.foundation = new MDCSnackbar(this);
        this.foundation.init();
    }
    showSnackbar(payload) {
      // Error handling?
        this.foundation.show(payload);
    }
    render() {
        const { actionAriaHidden, ariaHidden, classes, click } = this.state;
        const { message, actionText } = this.props;
        return (
            <div
                className={classNames('mdc-snackbar', classes.toJS().join(' '))}
                aria-live="assertive"
                aria-atomic="true"
                aria-hidden={ariaHidden}
                onClick={click}
            >
                <div className="mdc-snackbar__text">{message}</div>
                {actionText && <div className="mdc-snackbar__action-wrapper" aria-hidden={actionAriaHidden}>
                    <button
                        type="button"
                        className="mdc-button mdc-snackbar__action-button"
                    >{actionText}</button>
                </div>}
            </div>
        );
    }
}
Snackbar.propTypes = {
    message: PropTypes.string.isRequired,
    actionText: PropTypes.string,
};
export default Snackbar;
