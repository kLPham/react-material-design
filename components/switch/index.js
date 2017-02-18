import '@material/switch/dist/mdc.switch.css';
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Switch = ({ disabled, label }) =>
    <div>
        <div className={classNames('mdc-switch', { 'mdc-switch--disabled': disabled })}>
            <input type="checkbox" id="basic-switch" className="mdc-switch__native-control" disabled={disabled} />
            <div className="mdc-switch__background">
                <div className="mdc-switch__knob" />
            </div>
        </div>
        <label htmlFor="basic-switch" className="mdc-switch-label">{label}</label>
    </div>;
Switch.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
};
export default Switch;
