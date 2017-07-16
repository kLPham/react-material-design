import { MDCTemporaryDrawerFoundation } from '@material/drawer';

class MDCTemporaryDrawer extends MDCTemporaryDrawerFoundation {
    constructor(root) {
        super({
            addClass: className => root.setState(({ classes }) => ({
                classes: classes.add(className),
            })),
            removeClass: className => root.setState(({ classes }) => ({
                classes: classes.remove(className),
            })),
            hasClass: className => Boolean(root.state.classes.get(className)),
            addBodyClass: className => root.setState(({ bodyClasses }) => ({
                bodyClasses: bodyClasses.add(className),
            })),
            removeBodyClass: className => root.setState(({ bodyClasses }) => ({
                bodyClasses: bodyClasses.remove(className),
            })),
            hasNecessaryDom: () => true,
            registerInteractionHandler: (evt, handler) => root.setState({
                [`root${evt}`]: handler,

            }),
            deregisterInteractionHandler: (evt, handler) => root.setState({
                [`root${evt}`]: handler,
            }),
            registerDrawerInteractionHandler: (evt, handler) => root.setState({
                [`drawer${evt}`]: handler,
            }),
            deregisterDrawerInteractionHandler: (evt, handler) => root.setState({
                [`drawer${evt}`]: handler,
            }),
            registerTransitionEndHandler: handler => root.drawerContainer.addEventListener('transitionend', handler),
            deregisterTransitionEndHandler: handler => root.drawerContainer.removeEventListener('transitionend', handler),
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
