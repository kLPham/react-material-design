import { MDCDialogFoundation } from '@material/dialog';

export default class MDCDialog extends MDCDialogFoundation {
    constructor(root) {
        super(
          Object.assign({
              hasClass: className => Boolean(root.state.classes.get(className)),
              addClass: className => root.setState(prevState => ({
                  classes: prevState.classes.add(className),
              })),
              removeClass: className => root.setState(prevState => ({
                  classes: prevState.classes.remove(className),
              })),
              setAttr: (attr, val) => root.setState({
                  [attr]: val,
              }),
              addBodyClass: className => root.setState(prevState => ({
                  classesBody: prevState.classesBody.add(className),
              })),
              removeBodyClass: className => root.setState(prevState => ({
                  classesBody: prevState.classesBody.remove(className),
              })),
              eventTargetHasClass: (target, className) => console.log('eventTargetHasClass', target, className),
              registerInteractionHandler: (evt, handler) => root.setState({
                  [`root${evt}`]: handler,
              }),
              deregisterInteractionHandler: (evt, handler) => console.log('deregisterInteractionHandler', evt, handler),
              registerSurfaceInteractionHandler: (evt, handler) => root.setState({
                  [`surface${evt}`]: handler,
              }),
              deregisterSurfaceInteractionHandler: (evt, handler) => console.log('deregisterSurfaceInteractionHandler', evt, handler),
              registerDocumentKeydownHandler: (handler) => {},
              deregisterDocumentKeydownHandler: (handler) => {},
              registerFocusTrappingHandler: (handler) => {},
              deregisterFocusTrappingHandler: (handler) => {},
              numFocusableTargets: () => /* number */ 0,
              setDialogFocusFirstTarget: () => {},
              setInitialFocus: () => console.log('setInitialFocus'),
              getFocusableElements: () => /* Array<Element> */ [],
              saveElementTabState: (el) => {},
              restoreElementTabState: (el) => {},
              makeElementUntabbable: (el) => {},
              setBodyAttr: (attr, val) => root.setState({
                  [`body${attr}`]: val,
              }),
              rmBodyAttr: (/* attr: string */) => {},
              getFocusedTarget: () => {},
              setFocusedTarget: (/* target: EventTarget */) => {},
              notifyAccept: () => {},
              notifyCancel: () => {},
          }),
    );
    }
}
