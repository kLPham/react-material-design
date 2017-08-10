import '@material/snackbar/dist/mdc.snackbar.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCSnackbar } from '@material/snackbar';

/** Snackbar */
class Snackbar extends Component {
    static propTypes = {
        darkTheme: PropTypes.bool,
        visibleUntilTimeout: PropTypes.bool,
    }
    componentDidMount() {
        const { visibleUntilTimeout } = this.props;
        this.snackbar = new MDCSnackbar(this.mainRoot);
        this.snackbar.dismissesOnAction = visibleUntilTimeout;
    }
    showSnackbar(payload) {
        this.snackbar.show(payload);
    }
    render() {
        const { darkTheme } = this.props;
        return (
            <div
                ref={(d) => { this.mainRoot = d; }}
                className={classNames('mdc-snackbar', { 'mdc-snackbar--theme-dark': darkTheme })}
                aria-live="assertive"
                aria-atomic="true"
                aria-hidden="true"
            >
                <div className="mdc-snackbar__text" />
                <div className="mdc-snackbar__action-wrapper">
                    <button type="button" className="mdc-button mdc-snackbar__action-button" />
                </div>
            </div>
        );
    }
}
export default Snackbar;
