import '@material/textfield/dist/mdc.textfield.css';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { MDCTextfieldFoundation } from '@material/textfield';
import { Set as ImmutableSet } from 'immutable';
import MDCTextfield from './component';
import FormField from '../formField';
import { textfieldcssClasses } from '../classes';
// TODO: validation with helper text.
// TODO: helper text <p> should be after the <div>.
// TODO: Dark themes
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
        primary: PropTypes.bool,
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
        this.state = {
            classes: new ImmutableSet(),
            classesHelpText: new ImmutableSet(),
            classesLabel: new ImmutableSet(),
            disabled: props.disabled,
            value: props.value,
            id: v4(),
        };
    }
    componentDidMount() {
        this.foundation = new MDCTextfield(this);
        this.foundation.init();

        const { helpTextPersistent, value } = this.props;
        const { disabled } = this.state;
        const { addClassToHelptext, addClassToLabel } = this.foundation;

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
        const { addClassToLabel } = this.foundation;
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
    handleChange = (e) => {
        const { onChange } = this.props;
        const { value } = e.target;

        if (onChange) {
            onChange(value, e);
        }
    }
    render() {
        const { classes, classesHelpText, classesLabel, helpTextAttr, disabled, id, inputBlur, inputInput, inputKeydown, inputFocus } = this.state;
        const { alignEnd, helpText, label, required, primary, value } = this.props;
        return (
            <FormField
                alignEnd={alignEnd}
                additionalClassNames={classNames('mdc-textfield', classes.toJS().join(' '))}
            >
                <input
                    type="text"
                    id={`mdc-textfield--${id}`}
                    className="mdc-textfield__input"
                    value={value}
                    onChange={this.handleChange}
                    disabled={disabled}
                    required={required}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                    onInput={inputInput}
                    onKeyDown={inputKeydown}
                />
                <label
                    className={classNames('mdc-textfield__label', primary && textfieldcssClasses.primary, classesLabel.toJS().join(' '))}
                    htmlFor={`mdc-textfield--${id}`}
                >
                    {label}
                </label>
                {
                    helpText && <p
                        id={`mdc-textfield-helptext--${id}`}
                        className={classNames('mdc-textfield-helptext', classesHelpText.toJS().join(' '))}
                        {...helpTextAttr}
                    >
                        {helpText}
                    </p>
                }
            </FormField>
        );
    }
}
export default Textfield;
