import { MDCComponent } from '@material/base';
import { MDCTextfieldFoundation } from '@material/textfield';

export default class MDCTextfield extends MDCComponent {
    static attachTo(root) {
        return new MDCTextfield(root);
    }
    getDefaultFoundation() {
        return new MDCTextfieldFoundation(
            Object.assign({
                addClass: className => this.root_.setState(prevState => ({
                    classes: prevState.classes.add(className),
                })),
                removeClass: className => this.root_.setState(prevState => ({
                    classes: prevState.classes.remove(className),
                })),
                addClassToLabel: className => this.root_.setState(prevState => ({
                    classesLabel: prevState.classesLabel.add(className),
                })),
                removeClassFromLabel: className => this.root_.setState(prevState => ({
                    classesLabel: prevState.classesLabel.remove(className),
                })),
            }, this.getInputAdapterMethods_(), this.getHelptextAdapterMethods_()));
    }
    getInputAdapterMethods_() {
        return {
            registerInputFocusHandler: handler => this.root_.setState({
                inputFocus: handler }),
            deregisterInputFocusHandler: handler => this.root_.setState({
                inputFocus: handler }),
            registerInputBlurHandler: handler => this.root_.setState({
                inputBlur: handler,
            }),
            deregisterInputBlurHandler: handler => this.root_.setState({
                inputBLur: handler,
            }),
            getNativeInput: () => ({
                checkValidity: () => true,
                value: this.root_.props.value,
                disabled: typeof this.root_.props.disabled === 'undefined',
            }),
        };
    }
    getHelptextAdapterMethods_() {
        return {
            addClassToHelptext: className => this.root_.setState(prevState => ({
                classesHelpText: prevState.classesHelpText.add(className),
            })),
            removeClassFromHelptext: className => this.root_.setState(prevState => ({
                classesHelpText: prevState.classesHelpText.remove(className),
            })),

            setHelptextAttr: (name, value) => this.root_.setState({
                helpTextAttr: { [name]: value },
            }), // this.helpText.setAttribute(name, value),
            removeHelptextAttr: (name, value) => this.root_.setState({
                helpTextAttr: { [name]: value },
            }), // this.helpText.removeAttribute(name, value),
        };
    }
}
