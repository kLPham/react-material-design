import '@material/switch/dist/mdc.switch.css';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import uuid from 'uuid-v4';

const Switch = ({ disabled, label }) => {
    const id = uuid();
    return (
        <div>
            <div className={classNames('mdc-switch', { 'mdc-switch--disabled': disabled })}>
                <input type="checkbox" id={`mdc-switch--${id}`} className="mdc-switch__native-control" disabled={disabled} />
                <div className="mdc-switch__background">
                    <div className="mdc-switch__knob" />
                </div>
            </div>
            <label htmlFor={`mdc-switch--${id}`} className="mdc-switch-label">{label}</label>
        </div>
    );
};
Switch.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
};
export default Switch;
