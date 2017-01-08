import React, { PropTypes } from 'react';
import '@material/button/dist/mdc.button.css';
import classNames from 'classnames';
import { buttoncssClasses } from '../classes';

const cx = classNames.bind(buttoncssClasses);

// TODO: button can have multiple types e.g., primary raised
const Button = ({ label, type, disabled }) =>
    <button
        disabled={disabled}
        className={cx('mdc-button', buttoncssClasses[type])}
    >
        {label}
    </button>;
Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    disabled: PropTypes.bool,
};
export default Button;
