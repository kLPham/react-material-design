import '@material/textfield/dist/mdc.textfield.css';
import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import { Set as ImmutableSet } from 'immutable';
import { MDCTextfieldFoundation } from '@material/textfield';
import MDCTextfield from './component';

// TODO: Disabled Text Fields not up to spec. className mdc-textfield--disabled not getting applied. float above label doesn't work.
// TODO: setDisabled is not a function.
// TODO: validation with helper text.
// TODO: helper text <p> should be after the <div>.
// TODO: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `Textfield`.
// TODO: abstract which foundation to create new e.g., new MDCTextfieldFoundation.
const { HELPTEXT_PERSISTENT, LABEL_FLOAT_ABOVE } = MDCTextfieldFoundation.cssClasses;

class Textfield extends Component {
    static propTypes = {
        helpTextPersistent: PropTypes.bool,
        disabled: PropTypes.bool,
        helpText: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
    };
    state = {
        classes: new ImmutableSet(),
        classesHelpText: new ImmutableSet(),
        classesLabel: new ImmutableSet(),
    };
    componentDidMount() {
        this.foundation = new MDCTextfield(this);
        const { helpTextPersistent, value } = this.props;
        const { addClassToHelptext, addClassToLabel } = this.foundation.foundation_.adapter_;

        if (helpTextPersistent) {
            addClassToHelptext(HELPTEXT_PERSISTENT);
        }
/*        if (disabled) {
            setDisabled(disabled);
        }
        */
        if (value) {
            addClassToLabel(LABEL_FLOAT_ABOVE);
        }
    }
    componentWillReceiveProps(nextProps) {
        const { disabled, helpTextPersistent } = this.props;
        if (nextProps.disabled !== disabled) {
            this.setState({
                disabledInternal: nextProps.disabled,
            });
        }
        if (nextProps.helpTextPersistent !== helpTextPersistent) {
            this.setState({
                helpTextPersistentInternal: nextProps.helpTextPersistent,
            });
        }
        if (nextProps.value) {
            this.foundation.foundation_.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
        }
    }
    componentWillUnmount() {
        // TODO: not sure this is the right implementation.
        this.foundation.destroy();
    }
    foundation;
    render() {
        const { classes, classesHelpText, classesLabel, helpTextAttr, inputBlur, inputFocus } = this.state;
        const { disabled, helpText, label, value } = this.props;
        return (
            <div
                onFocus={inputFocus}
                onBlur={inputBlur}
                className={classNames('mdc-textfield', classes.toJS().join(' '))}
            >
                <input
                    type="text"
                    id="my-textfield"
                    className="mdc-textfield__input"
                    value={value}
                    disabled={disabled}
                />
                <label
                    className={classNames('mdc-textfield__label', classesLabel.toJS().join(' '))}
                    htmlFor="my-textfield"
                >
                    {label}
                </label>
                <p
                    className={classNames('mdc-textfield-helptext', classesHelpText.toJS().join(' '))}
                    {...helpTextAttr}
                >
                    {helpText}
                </p>
            </div>
        );
    }
}
export default Textfield;
