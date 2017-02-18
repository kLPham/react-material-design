import '@material/textfield/dist/mdc.textfield.css';
import classNames from 'classnames';
import React, { PropTypes, PureComponent } from 'react';
import { MDCTextfieldFoundation } from '@material/textfield';
import { Set as ImmutableSet } from 'immutable';
import MDCTextfield from './component';
import FormField from '../formField';

// TODO: validation with helper text.
// TODO: helper text <p> should be after the <div>.
const { HELPTEXT_PERSISTENT, LABEL_FLOAT_ABOVE } = MDCTextfieldFoundation.cssClasses;

class Textfield extends PureComponent {
    static propTypes = {
        alignEnd: PropTypes.bool,
        disabled: PropTypes.bool,
        helpText: PropTypes.string,
        helpTextPersistent: PropTypes.bool,
        label: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        required: PropTypes.bool,
    };
    static defaultProps = {
        alignEnd: false,
        disabled: false,
        required: false,
        value: '',
    }
    constructor(props) {
        super(props);
        console.log(props.disabled)
        this.state = {
            classes: new ImmutableSet(),
            classesHelpText: new ImmutableSet(),
            classesLabel: new ImmutableSet(),
            disabled: props.disabled,
            value: props.value,
        };
    }
    componentDidMount() {
        this.foundation = new MDCTextfield(this);
        this.foundation.init();

        const { helpTextPersistent, value } = this.props;
        const { disabled } = this.state;
        const { addClassToHelptext, addClassToLabel } = this.foundation.adapter_;

        if (helpTextPersistent) {
            addClassToHelptext(HELPTEXT_PERSISTENT);
        }
        if (disabled) {
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
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
    handleChange = e => this.setState({ value: e.target.value })
    render() {
        const { classes, classesHelpText, classesLabel, helpTextAttr, disabled, inputBlur, inputInput, inputKeydown, inputFocus, value } = this.state;
        const { alignEnd, helpText, label, required, onChange } = this.props;
        return (
            <FormField
                alignEnd={alignEnd}
                additionalClassNames={classNames('mdc-textfield', classes.toJS().join(' '))}
            >
                <input
                    type="text"
                    id="my-textfield"
                    className="mdc-textfield__input"
                    value={value}
                    onChange={onChange || this.handleChange}
                    disabled={disabled}
                    required={required}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                    onInput={inputInput}
                    onKeyDown={inputKeydown}
                />
                <label
                    className={classNames('mdc-textfield__label', classesLabel.toJS().join(' '))}
                    htmlFor="my-textfield"
                >
                    {label}
                </label>
                <p
                    id="my-text-helptext"
                    className={classNames('mdc-textfield-helptext', classesHelpText.toJS().join(' '))}
                    {...helpTextAttr}
                >
                    {helpText}
                </p>
            </FormField>
        );
    }
}
export default Textfield;
