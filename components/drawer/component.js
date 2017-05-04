import { MDCTemporaryDrawerFoundation } from '@material/drawer';

class MDCTemporaryDrawer extends MDCTemporaryDrawerFoundation {
    constructor(root) {
        super({
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
            registerDrawerInteractionHandler: (evt, handler) => console.log('registerDrawerInteractionHandler', evt, handler),
            deregisterDrawerInteractionHandler: (evt, handler) => console.log('deregisterDrawerInteractionHandler', evt, handler),
            registerTransitionEndHandler: handler => console.log('registerTransitionEndHandler', handler),
            deregisterTransitionEndHandler: handler => console.log('deregisterTransitionEndHandler', handler),
            registerDocumentKeydownHandler: handler => document.addEventListener('keydown', handler),
            deregisterDocumentKeydownHandler: handler => document.removeEventListener('keydown', handler),
            getDrawerWidth: () => {}, // console.log('getDrawerWidth'),
            setTranslateX: (value) => {}, // console.log('setTranslateX'),
            getFocusableElements: () => {}, // console.log('getFocusableElements'),
            saveElementTabState: (el) => {}, // console.log('saveElementTabState', el),
            restoreElementTabState: (el) => {},
            makeElementUntabble: (el) => {},
            notifyOpen: () => {},
            notifyClose: () => {},
            isRtl: () => {},
            isDrawer: (el) => {},
        });
    }
}
export default MDCTemporaryDrawer;
