import '@material/radio/dist/mdc.radio.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCRadio } from '@material/radio';
import { v4 } from 'uuid';

// TODO: oncClick handle
/** Radio*/
class Radio extends Component {
    static propTypes = {
        label: PropTypes.string,
        darkTheme: PropTypes.bool,
        disable: PropTypes.bool,
        checked: PropTypes.bool,
        name: PropTypes.string,
    }
    componentDidMount() {
        const { disable, checked } = this.props;
        this.radio = new MDCRadio(this.mainRoot);
        this.radio.foundation_.setDisabled(disable);
        this.radio.foundation_.setChecked(checked);
    }
    render() {
        const { darkTheme, label, name } = this.props;
        const id = v4();

        return (
            <div>
                <div ref={(d) => { this.mainRoot = d; }} className={classNames('mdc-radio', { 'mdc-radio--theme-dark': darkTheme })}>
                    <input
                        className="mdc-radio__native-control"
                        type="radio"
                        id={`mdc-radio--${id}`}
                        name={name}
                    />
                    <div className="mdc-radio__background">
                        <div className="mdc-radio__outer-circle" />
                        <div className="mdc-radio__inner-circle" />
                    </div>
                </div>
                <label
                    id={`mdc-radio-label--${id}`}
                    htmlFor={`mdc-radio--${id}`}
                >
                    {label}
                </label>
            </div>
        );
    }
          }
export default Radio;
