import '@material/button/dist/mdc.button.min.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { buttoncssClasses } from '../classes';

const cx = classNames.bind(buttoncssClasses);

// TODO: typecheck props (label, disabled).
/**
* Flat and Raised Buttons
*/
const Button = ({ label, disabled, ripple, ...rest }) =>
    (<button
        className={cx('mdc-button', ...Object.keys(rest).map(modifier =>
            buttoncssClasses[modifier],
        ))}
        data-mdc-auto-init={ripple && 'MDCRipple'}
        disabled={disabled}
    >
        {label}
    </button>);

Button.propTypes = {
  /**
  * Colors the button with the accent color.
  */
    accent: PropTypes.bool,
  /**
  * Same as accent
  */
    colored: PropTypes.bool,
    /**
    * Reduces the amount of horizontal padding in the button.
    */
    compact: PropTypes.bool,
    /**
    * Compresses the button text to make it slightly smaller.
    */
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    /**
    * Label to be displayed on button.
    */
    label: PropTypes.string.isRequired,
    /**
    * Colors the button with the primary color.
    */
    primary: PropTypes.bool,
    /**
    * Elevates the button and creates a colored background.
    */
    raised: PropTypes.bool,
    ripple: PropTypes.bool,
};
Button.defaultProps = {
    label: '',
};
export default Button;
