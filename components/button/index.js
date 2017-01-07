import React from 'react';
import '@material/button/dist/mdc.button.css';

const cssClasses = {
    colored: 'mdc-button--accent',
    raised: 'mdc-button--raised',
    dense: 'mdc-button--dense',
    compact: 'mdc-button--compact',
    primary: 'mdc-button--primary',
};

// TODO: button can have multiple types e.g., primary raised
const Button = ({ label, type, disabled }) =>
    <button
        disabled={disabled}
        className={`mdc-button ${typeof type !== 'undefined' ? cssClasses[type] : ''}`}
    >
        {label}
     </button>;

export default Button;
