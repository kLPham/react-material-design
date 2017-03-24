import { MDCCheckboxFoundation } from '@material/checkbox';
import { getCorrectEventName } from '@material/animation';
// TODO: isAttachedToDOM is supposed to be evaluating parent node.
// TODO: animation is weird. getAnimationName results in cssPropertyMap which has "animation" in it.

export default class MDCCheckbox extends MDCCheckboxFoundation {
    constructor(root) {
    //  console.dir(MDCCheckboxFoundation)
        super(
            Object.assign({
                addClass: className => root.setState(prevState => ({
                    classes: prevState.classes.add(className),
                })),
                removeClass: className => root.setState(prevState => ({
                    classes: prevState.classes.remove(className),
                })),
                registerAnimationEndHandler: handler => root.setState({
                    [getCorrectEventName(root, 'animation')]: handler,
                }),
                deregisterAnimationEndHandler: () => root.setState({
                    [getCorrectEventName(root, 'animation')]: null,
                }),
                registerChangeHandler: handler => root.setState({
                    onChange: handler,
                }),
                deregisterChangeHandler: handler => root.setState({
                    onChange: handler,
                }),
                getNativeControl: () => ({
                    checkValidity: () => true,
                    checked: root.state.checked,
                    indeterminate: root.state.indeterminate,
                    disabled: root.state.disabled,
                }),
                forceLayout: () => console.log('forceLayout'), // this.root_.nativeCb.offsetWidth,
                isAttachedToDOM: () => Boolean(this.root_),
            }));
    }
}
