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
    };
    static defaultProps = {
        alignEnd: false,
        disabled: false,
        value: '',
    }
    constructor(props) {
        super(props);
        this.state = {
            classes: new ImmutableSet(),
            classesHelpText: new ImmutableSet(),
            classesLabel: new ImmutableSet(),
            value: props.value,
            disabled: props.disabled,
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
        if (nextProps.value) {
            addClassToLabel(LABEL_FLOAT_ABOVE);
        }
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            value,
        });
    }
    render() {
        const { classes, classesHelpText, classesLabel, helpTextAttr, disabled, inputBlur, inputFocus, value } = this.state;
        const { alignEnd, helpText, label } = this.props;
        return (
            <FormField
                onFocus={inputFocus}
                onBlur={inputBlur}
                alignEnd={alignEnd}
                additionalClassNames={classNames('mdc-textfield', classes.toJS().join(' '))}
            >
                <input
                    type="text"
                    id="my-textfield"
                    className="mdc-textfield__input"
                    value={value}
                    onChange={e => this.handleChange(e)}
                    disabled={disabled}
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
