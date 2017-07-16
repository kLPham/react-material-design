import '@material/snackbar/dist/mdc.snackbar.css';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Set as ImmutableSet } from 'immutable';
import MDCSnackbar from './component';

class Snackbar extends PureComponent {
    static propTypes = {
        visibleUntilTimeout: PropTypes.bool,
    };
    constructor(props) {
        super(props);
        this.state = {
            classes: new ImmutableSet(),
        };
    }
    componentWillMount() {
        const { visibleUntilTimeout } = this.props;
        this.foundation = new MDCSnackbar(this);
        this.foundation.init();
        if (visibleUntilTimeout) {
            this.foundation.setDismissOnAction(!visibleUntilTimeout);
        }
    }
    showSnackbar(payload) {
      // Error handling?
        this.foundation.show(payload);
    }
    render() {
        const { actionText, actionAriaHidden, ariaHidden, classes, click, message } = this.state;
        return (
            <div
                className={classNames('mdc-snackbar', classes.toJS().join(' '))}
                aria-live="assertive"
                aria-atomic="true"
                aria-hidden={ariaHidden}
                ref={(d) => { this.documentRoot = d; }}
            >
                <div className="mdc-snackbar__text">{message}</div>
                {actionText && <div className="mdc-snackbar__action-wrapper" aria-hidden={actionAriaHidden}>
                    <button
                        type="button"
                        onClick={click}
                        className="mdc-button mdc-snackbar__action-button"
                    >{actionText}</button>
                </div>}
            </div>
        );
    }
}
export default Snackbar;
