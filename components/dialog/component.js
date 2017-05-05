import { MDCDialogFoundation } from '@material/dialog';

export default class MDCDialog extends MDCDialogFoundation {
    constructor(root) {
        super({
            addClass: className => root.setState(prevState => ({
                classes: prevState.classes.add(className),
            })),
            removeClass: className => root.setState(prevState => ({
                classes: prevState.classes.remove(className),
            })),
            setStyle: (propertyName, value) => root.setState({
                styles: {
                    [propertyName]: value,
                },
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
            registerDocumentKeydownHandler: handler => document.addEventListener('keydown', handler),
            deregisterDocumentKeydownHandler: handler => document.removeEventListener('keydown', handler),
            notifyAccept: () => console.log('notifyAccept'),
            notifyCancel: () => console.log('notifyCancel'),
            trapFocusOnSurface: () => console.log('trapFocusOnSurface'),
            untrapFocusOnSurface: () => console.log('untrapFocusOnSurface'),
        });
    }
}
