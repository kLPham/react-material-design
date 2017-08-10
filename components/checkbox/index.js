import '@material/checkbox/dist/mdc.checkbox.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCCheckbox } from '@material/checkbox';
import { v4 } from 'uuid';

// TODO: Align End
/** Checkbox */
class Checkbox extends Component {
    static propTypes = {
        checked: PropTypes.bool,
        darkTheme: PropTypes.bool,
        disable: PropTypes.bool,
        indeterminate: PropTypes.bool,
        label: PropTypes.string,
    }
    componentDidMount() {
        const { checked, disable, indeterminate } = this.props;
        this.checkbox = new MDCCheckbox(this.mainRoot);
        this.checkbox.foundation_.setDisabled(disable);
        this.checkbox.foundation_.setChecked(checked);
        this.checkbox.foundation_.setIndeterminate(indeterminate);
    }
    render() {
        const { darkTheme, label } = this.props;
        const id = v4();

        return (
            <div className="mdc-form-field">
                <div ref={(d) => { this.mainRoot = d; }} className={classNames('mdc-checkbox', { 'mdc-checkbox--theme-dark': darkTheme })}>
                    <input
                        className="mdc-checkbox__native-control"
                        id={`mdc-checkbox--${id}`}
                        type="checkbox"
                    />
                    <div className="mdc-checkbox__background">
                        <svg
                            className="mdc-checkbox__checkmark"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className="mdc-checkbox__checkmark__path"
                                fill="none"
                                stroke="white"
                                d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                        </svg>
                        <div className="mdc-checkbox__mixedmark" />
                    </div>
                </div>
                {label && <label htmlFor={`mdc-checkbox--${id}`}>{label}</label>}
            </div>
        );
    }
}
export default Checkbox;
