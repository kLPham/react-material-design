import '@material/snackbar/dist/mdc.snackbar.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCSnackbar } from '@material/snackbar';

class Snackbar extends Component {
    static propTypes = {
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
        return (
            <div
                ref={(d) => { this.mainRoot = d; }}
                className="mdc-snackbar"
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
