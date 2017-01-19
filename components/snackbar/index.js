import React from 'react';
import '@material/snackbar/dist/mdc.snackbar.css';

const Snackbar = () =>
    <div
        className="mdc-snackbar"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden="true"
    >
        <div className="mdc-snackbar__text" />
        <div className="mdc-snackbar__action-wrapper">
            <button type="button" className="mdc-button mdc-snackbar__action-button" />
        </div>
    </div>;
export default Snackbar;
