import '@material/textfield/dist/mdc.textfield.css';
import classNames from 'classnames';
import React, { PropTypes, PureComponent } from 'react';
import { MDCTextfieldFoundation } from '@material/textfield';
import { Set as ImmutableSet } from 'immutable';
import MDCTextfield from './component';

// TODO: validation with helper text.
// TODO: helper text <p> should be after the <div>.
const { HELPTEXT_PERSISTENT, LABEL_FLOAT_ABOVE } = MDCTextfieldFoundation.cssClasses;

class Textfield extends PureComponent {
    static propTypes = {
        disabled: PropTypes.bool,
        helpText: PropTypes.string,
        helpTextPersistent: PropTypes.bool,
        label: PropTypes.string,
        value: PropTypes.string,
    };
    state = {
        classes: new ImmutableSet(),
        classesHelpText: new ImmutableSet(),
        classesLabel: new ImmutableSet(),
        value: this.props.value,
    };
    componentDidMount() {
        this.foundation = new MDCTextfield(this);
        this.foundation.init();
        const { disabled, helpTextPersistent, value } = this.props;
        const { addClassToHelptext, addClassToLabel } = this.foundation.adapter_;

        if (helpTextPersistent) {
            addClassToHelptext(HELPTEXT_PERSISTENT);
        }
        if (disabled) {
            console.log('setDisabled', this.foundation);
            this.foundation.setDisabled(disabled);
        }

        if (value) {
            addClassToLabel(LABEL_FLOAT_ABOVE);
        }
    }
    componentWillReceiveProps(nextProps) {
        const { disabled, helpTextPersistent } = this.props;
        const { addClassToLabel } = this.foundation.adapter_;
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
            addClassToLabel(LABEL_FLOAT_ABOVE);
        }
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
    render() {
        const { classes, classesHelpText, classesLabel, helpTextAttr, inputBlur, inputFocus, value } = this.state;
        const { disabled, helpText, label } = this.props;
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
                    onChange={event => this.setState({ value: event.target.value })}
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
