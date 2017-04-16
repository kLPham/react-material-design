import { MDCTemporaryDrawerFoundation } from '@material/drawer';

class MDCTemporaryDrawer extends MDCTemporaryDrawerFoundation {
    constructor(root) {
        super(
      Object.assign({
          addClass: className => root.setState(prevState => ({
              classes: prevState.classes.add(className),
          })),
          removeClass: className => root.setState(prevState => ({
              classes: prevState.classes.remove(className),
          })),
          hasClass: className => Boolean(root.state.classes.get(className)),
          hasNecessaryDom: () => true,
          registerInteractionHandler: (type, handler) => root.setState({
              [`root${type}`]: handler,

          }),
          deregisterInteractionHandler: (type, handler) => root.setState({
              [`root${type}`]: handler,
          }),
          registerDrawerHandler: (type, handler) => root.setState({
              [`drawer${type}`]: handler,

          }),
          degisterDrawerHandler: (type, handler) => root.setState({
              [`drawer${type}`]: handler,
          }),
          deregisterTransitionEndHandler: handler => console.log('deregisterTransitionEndHandler', handler),
          registerTransitionEndHandler: handler => console.log('registerTransitionEndHandler', handler),
          registerDocumentKeydownHandler: handler => console.log('registerDocumentKeydownHandler', handler),
          deregisterDocumentKeydownHandler: handler => console.log('deregisterDocumentKeydownHandler', handler),

          updateCssVariable: value => console.log('updateCssVariable', value),
      }));
    }
}
export default MDCTemporaryDrawer;
