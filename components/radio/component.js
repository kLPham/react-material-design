import { MDCRadioFoundation } from '@material/radio';

export default class MDCRadio extends MDCRadioFoundation {
    constructor(root) {
        super(root);
        this.adapter_ = Object.assign({
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
    setChecked(checked) {
        return super.setChecked(checked);
    }
    setDisabled(disabled) {
        return super.setDisabled(disabled);
    }
}
