import { MDCSnackbarFoundation } from '@material/snackbar';

// TODO: registerTransitionEndHandler execution.
export default class MDCSnackbar extends MDCSnackbarFoundation {
    constructor(root) {
        super(
          Object.assign({
              addClass: className => root.setState(prevState => ({
                  classes: prevState.classes.add(className),
              })),
              removeClass: className => root.setState(prevState => ({
                  classes: prevState.classes.remove(className),
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
              registerTransitionEndHandler: handler => console.log('registerTransitionEndHandler', handler),
              deregisterTransitionEndHandler: handler => console.log('deregisterTransitionEndHandler', handler),
          }),
        );
    }
}
