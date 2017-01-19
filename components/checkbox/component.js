import { MDCCheckboxFoundation } from '@material/checkbox';
import { getCorrectEventName } from '@material/animation';
// TODO: isAttachedToDOM is supposed to be evaluating parent node.
// TODO: animation is weird. getAnimationName results in cssPropertyMap which has "animation" in it.

export default class MDCCheckbox extends MDCCheckboxFoundation {
    constructor(root) {
        super();
        this.adapter_ =  Object.assign({
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
                indeterminate: typeof root.props.indeterminate === 'undefined',
                disabled: typeof root.props.disabled === 'undefined',
            }),
            forceLayout: () => console.log('forceLayout'), // this.root_.nativeCb.offsetWidth,
            isAttachedToDOM: () => Boolean(this.root_),
        });
    }
}
