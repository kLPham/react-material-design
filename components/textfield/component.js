import { MDCTextfieldFoundation } from '@material/textfield';

export default class MDCTextfield extends MDCTextfieldFoundation {
    constructor(root) {
        super(Object.assign({
            addClass: className => root.setState(prevState => ({
                classes: prevState.classes.add(className),
            })),
            removeClass: className => root.setState(prevState => ({
                classes: prevState.classes.remove(className),
            })),
            addClassToLabel: className => root.setState(prevState => ({
                classesLabel: prevState.classesLabel.add(className),
            })),
            removeClassFromLabel: className => root.setState(prevState => ({
                classesLabel: prevState.classesLabel.remove(className),
            })),
            helptextHasClass: className => root.state.classesHelpText.has(className),
            registerInputFocusHandler: handler => root.setState({
                inputFocus: handler,
            }),
            deregisterInputFocusHandler: handler => root.setState({
                inputFocus: handler,
            }),
            registerInputBlurHandler: handler => root.setState({
                inputBlur: handler,
            }),
            deregisterInputBlurHandler: handler => root.setState({
                inputBlur: handler,
            }),
            setHelptextAttr: (name, value) => root.setState(prevState => ({
                helpTextAttr: {
                    ...prevState.helpTextAttr,
                    [name]: value,
                },
            })),
            removeHelptextAttr: (name, value) => root.setState(prevState => ({
                helpTextAttr: {
                    ...prevState.helpTextAttr,
                    [name]: value,
                },
            })),
            getNativeInput: () => ({
                checkValidity: () => true,
                value: root.props.value,
                disabled: root.state.disabled,
            }),
            addClassToHelptext: className => root.setState(prevState => ({
                classesHelpText: prevState.classesHelpText.add(className),
            })),
            removeClassFromHelptext: className => root.setState(prevState => ({
                classesHelpText: prevState.classesHelpText.remove(className),
            })),
        }));
    }
}
