import { MDCRadioFoundation } from '@material/radio';

export default class MDCRadio extends MDCRadioFoundation {
    constructor(root) {
        super({
            getNativeControl: () => ({
                checked: root.state.checked,
                disabled: root.state.disabled,
            }),
            addClass: className => root.setState(prevState => ({
                classes: prevState.classes.add(className),
            })),
            removeClass: className => root.setState(prevState => ({
                classes: prevState.classes.remove(className),
            })),
        });
    }
}
