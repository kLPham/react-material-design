import { getCorrectEventName } from '@material/animation';
import { MDCSnackbarFoundation } from '@material/snackbar';

// TODO: registerTransitionEndHandler execution.
export default class MDCSnackbar extends MDCSnackbarFoundation {
    constructor(root) {
        super({
            addClass: className => root.setState(({ classes }) => ({
                classes: classes.add(className),
            })),
            removeClass: className => root.setState(({ classes }) => ({
                classes: classes.remove(className),
            })),
            setAriaHidden: () => root.setState({
                ariaHidden: true,
            }),
            unsetAriaHidden: () => root.setState({
                ariaHidden: false,
            }),
            setMessageText: message => root.setState({
                message,
            }),
            setActionText: actionText => root.setState({
                actionText,
            }),
            setActionAriaHidden: () => root.setState({
                actionAriaHidden: true,
            }),
            unsetActionAriaHidden: () => root.setState({
                actionAriaHidden: false,
            }),
            registerActionClickHandler: handler => root.setState({
                click: handler,
            }),
            deregisterActionClickHandler: handler => root.setState({
                click: handler,
            }),
            registerTransitionEndHandler: handler => root.documentRoot.addEventListener(getCorrectEventName(window, 'transitionend'), handler),
            deregisterTransitionEndHandler: handler => root.documentRoot.removeEventListener(getCorrectEventName(window, 'transitionend'), handler),
        });
    }
}
