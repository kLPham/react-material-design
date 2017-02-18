import '@material/button/dist/mdc.button.css';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { buttoncssClasses } from '../classes';

const cx = classNames.bind(buttoncssClasses);

// TODO: button can have multiple types e.g., primary raised
// TODO: typecheck props (label, type, disabled).

const Button = ({ label, ripple, type, ...rest }) =>
    <button
        className={cx('mdc-button', buttoncssClasses[type])}
        data-mdc-auto-init={ripple && 'MDCRipple'}
        {...rest}
    >
        {label}
    </button>;
Button.propTypes = {
    label: PropTypes.string.isRequired,
    ripple: PropTypes.bool,
    type: PropTypes.string,
};
Button.defaultProps = {
    label: '',
    ripple: null,
    type: '',
};
export default Button;
