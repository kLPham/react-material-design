import React, { PropTypes } from 'react';
import { compose, mapProps, pure, toClass } from 'recompose';
import '@material/radio/dist/mdc.radio.css';
import classNames from 'classnames';
import { MDCRadio } from '@material/radio';

// TODO: onclick !checked
// TODO: grouping radio buttons. children?

const cssClasses = {
    disabled: 'mdc-radio--disabled',
};

const Radio = ({ radio, label, disabled }) =>
    <div>
        <div disabled={disabled} className={classNames('mdc-radio', cssClasses[disabled && 'disabled'])} >
            <input onClick={() => console.log(radio)} className="mdc-radio__native-control" type="radio" id="radio-1" name="radios" disabled={disabled} />
            <div className="mdc-radio__background">
                <div className="mdc-radio__outer-circle" />
                <div className="mdc-radio__inner-circle" />
            </div>
        </div>
        <label id="radio-1-label" htmlFor="radio-1">{label}</label>
    </div>;

const enhance = compose(
    mapProps(({ label, disabled }) => ({
        radio: toClass(MDCRadio),
        label,
        disabled,
    })),
    pure,
);
Radio.propTypes = {
    radio: PropTypes.any,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};
const EnhancedComponent = enhance(Radio);
export default EnhancedComponent;
