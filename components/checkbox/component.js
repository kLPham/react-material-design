import { MDCComponent } from '@material/base';
import { MDCCheckboxFoundation } from '@material/checkbox';
import { getCorrectEventName } from '@material/animation';
// TODO: isAttachedToDOM is supposed to be evaluating parent node.
// TODO: animation is weird. getAnimationName results in cssPropertyMap which has "animation" in it.

export default class MDCCheckbox extends MDCComponent {
    static attachTo(root) {
        return new MDCCheckbox(root);
    }
    getDefaultFoundation() {
        return new MDCCheckboxFoundation(
            Object.assign({
                addClass: className => this.root_.setState(prevState => ({
                    classes: prevState.classes.add(className),
                })),
                removeClass: className => this.root_.setState(prevState => ({
                    classes: prevState.classes.remove(className),
                })),
                registerAnimationEndHandler: handler => this.root_.setState({
                    [getCorrectEventName(this.root_, 'animation')]: handler,
                }),
                deregisterAnimationEndHandler: () => this.root_.setState({
                    [getCorrectEventName(this.root_, 'animation')]: null,
                }),
                registerChangeHandler: handler => this.root_.setState({
                    onChange: handler,
                }),
                deregisterChangeHandler: handler => this.root_.setState({
                    onChange: handler,
                }),
                getNativeControl: () => ({
                    checkValidity: () => true,
                    checked: this.root_.props.checked,
                    indeterminate: typeof this.root_.props.indeterminate === 'undefined',
                    disabled: typeof this.root_.props.disabled === 'undefined',
                }),
                forceLayout: () => console.log('forceLayout'), // this.root_.nativeCb.offsetWidth,
                isAttachedToDOM: () => Boolean(this.root_),
            }));
    }
}
