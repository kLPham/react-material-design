import '@material/switch/dist/mdc.switch.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 } from 'uuid';

/** Switch */
const Switch = ({ darkTheme, disable, label }) => {
    const id = v4();
    return (
        <div>
            <div className={classNames('mdc-switch', { 'mdc-switch--theme-dark': darkTheme }, { 'mdc-switch--disabled': disable })}>
                <input type="checkbox" id={`mdc-switch--${id}`} className="mdc-switch__native-control" disable={disable} />
                <div className="mdc-switch__background">
                    <div className="mdc-switch__knob" />
                </div>
            </div>
            {label && <label htmlFor={`mdc-switch--${id}`} className="mdc-switch-label">{label}</label>}
        </div>
    );
};
Switch.propTypes = {
    darkTheme: PropTypes.bool,
    disable: PropTypes.bool,
    label: PropTypes.string,
};
export default Switch;
