import '@material/textfield/dist/mdc.textfield.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCTextfield } from '@material/textfield';
import { v4 } from 'uuid';

/** Textfield */
class Textfield extends Component {
    static propTypes = {
        darkTheme: PropTypes.bool,
        disabled: PropTypes.bool,
        helpText: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
        required: PropTypes.bool,
        value: PropTypes.string,
    }
    state ={
        id: v4(),
        value: this.props.value,
    }
    componentDidMount() {
        const { disabled } = this.props;
        this.textfield = new MDCTextfield(this.mainRoot);
        this.textfield.foundation_.setDisabled(disabled);
    }
    handleChange = e => this.setState({
        value: e.target.value,
    });
    render() {
        const { id, value } = this.state;
        const { darkTheme, helpText, label, required, onChange } = this.props;
        return (
            <div>
                <div
                    ref={(d) => { this.mainRoot = d; }}
                    className={classNames('mdc-textfield', { 'mdc-textfield--theme-dark': darkTheme })}
                >
                    <input
                        className="mdc-textfield__input"
                        id={`mdc-textfield--${id}`}
                        value={this.props.value || value}
                        required={required}
                        type="text"
                        onChange={onChange || this.handleChange}
                    />
                    <label className="mdc-textfield__label" htmlFor={`mdc-textfield--${id}`}>{label}</label>
                </div>
                {
                    helpText &&
                    <p id={`mdc-textfield-helptext--${id}`} className="mdc-textfield-helptext" aria-hidden="true">
                        {helpText}
                    </p>
                }
            </div>
        );
    }
}
export default Textfield;
