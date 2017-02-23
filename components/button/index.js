import '@material/button/dist/mdc.button.css';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { buttoncssClasses } from '../classes';

const cx = classNames.bind(buttoncssClasses);

// TODO: button can have multiple types e.g., primary raised
// TODO: typecheck props (label, disabled).

const Button = ({ label, disabled, ripple, ...rest }) =>
    <button
        className={cx('mdc-button', Object.keys(rest).map(modifier =>
        buttoncssClasses[modifier]),
        )}
        data-mdc-auto-init={ripple && 'MDCRipple'}
        disabled={disabled}
    >
        {label}
    </button>;
Button.propTypes = {
    label: PropTypes.string.isRequired,
    ripple: PropTypes.bool,
    disabled: PropTypes.bool,
};
Button.defaultProps = {
    label: '',
    ripple: null,
};
export default Button;
