import React, { PropTypes, PureComponent } from 'react';
import '@material/textfield/dist/mdc.textfield.css';
import { MDCTextfieldFoundation } from '@material/textfield';
import { Set as ImmutableSet } from 'immutable';

const { LABEL_FLOAT_ABOVE, HELPTEXT_PERSISTENT } = MDCTextfieldFoundation.cssClasses;
class Textfield extends PureComponent {
    static propTypes = {
        disabled: PropTypes.bool,
        labelText: PropTypes.string,
        helpText: PropTypes.string,
        helpTextPersistent: PropTypes.bool,
        value: PropTypes.string,
    };
    static defaultProps = {
        value: '',
    };
    state = {
        classes: new ImmutableSet(),
        classesLabel: new ImmutableSet(),
        classesHelpText: new ImmutableSet(),
        helpTextPersistentInternal: false,
        helpTextAriaHidden: 'aria-hidden',
    };

    // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // so that proper work can be performed.
    componentDidMount() {
        const { value, helpTextPersistent, disabled } = this.props;
        const { addClassToHelptext, addClassToLabel } = this.foundation.adapter_;

        this.foundation.init();
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
// Here we synchronize the internal state of the UI component based on what the user has specified.
    componentWillReceiveProps(nextProps) {
        if (nextProps.disabled !== this.props.disabled) {
            this.setState({
                disabledInternal: nextProps.disabled,
            });
        }
        if (nextProps.helpTextPersistent !== this.props.helpTextPersistent) {
            this.setState({
                helpTextPersistentInternal: nextProps.helpTextPersistent,
            });
        }
    }

// Since we cannot set an indeterminate attribute on a native checkbox, we use componentDidUpdate to update
// the indeterminate value of the native checkbox whenever a change occurs (as opposed to doing so within
// render()).
    componentWillUnmount() {
        this.foundation.destroy();
    }
    // Here we initialize a foundation class, passing it an adapter which tells it how to
    // work with the React component in an idiomatic way.
    foundation = new MDCTextfieldFoundation({
        addClass: className => this.setState(prevState => ({
            classes: prevState.classes.add(className),
        })),
        removeClass: className => this.setState(prevState => ({
            classes: prevState.classes.remove(className),
        })),
        addClassToLabel: className => this.setState(prevState => ({
            classesLabel: prevState.classesLabel.add(className),
        })),
        removeClassFromLabel: className => this.setState(prevState => ({
            classesLabel: prevState.classesLabel.remove(className),
        })),
        addClassToHelptext: className => this.setState(prevState => ({
            classesHelpText: prevState.classesHelpText.add(className),
        })),
        removeClassFromHelptext: className => this.setState(prevState => ({
            classesHelpText: prevState.classesHelpText.remove(className),
        })),
        helptextHasClass: className => this.setState(prevState => ({
            classesHelpText: prevState.classesHelpText.add(className),
        })),
        registerInputFocusHandler: handler => this.nativeTf.addEventListener('focus', handler),
        deregisterInputFocusHandler: handler => this.nativeTf.removeEventListener('focus', handler),
        registerInputBlurHandler: handler => this.nativeTf.addEventListener('blur', handler),
        deregisterInputBlurHandler: handler => this.nativeTf.removeEventListener('blur', handler),
        setHelptextAttr: (name, value) => this.helpText.setAttribute(name, value),
        removeHelptextAttr: (name, value) => this.helpText.removeAttribute(name, value),
        getNativeInput: () => {
            if (!this.nativeTf) {
                throw new Error('Invalid state for operation');
            }
            return this.nativeTf;
        },
    });
    render() {
        // Within render, we generate the html needed to render a proper MDC-Web checkbox.
        // TODO: support html types e.g., password
        const { classes, classesLabel, classesHelpText } = this.state;
        const { value, labelText, helpText } = this.props;
        return (
            <div>
                <div
                    ref={(d) => { this.anchor = d; }}
                    className={`mdc-textfield ${classes.toJS().join(' ')}`}
                >
                    <input
                        type="text"
                        ref={(i) => { this.nativeTf = i; }}
                        className="mdc-textfield__input"
                        aria-controls="my-textfield-helptext"
                        value={value}
                    />
                    <label
                        className={`mdc-textfield__label ${classesLabel.toJS().join(' ')}`}
                        htmlFor="my-textfield"
                    >
                        {labelText}
                    </label>
                </div>
                <p
                    ref={(p) => { this.helpText = p; }}
                    className={`mdc-textfield-helptext ${classesHelpText.toJS().join(' ')}`}
                >
                    {helpText}
                </p>
            </div>
        );
    }
}
export default Textfield;
