import { MDCSelectFoundation } from '@material/select';

export default class MDCSelect extends MDCSelectFoundation {
    constructor(root) {
        super(
            Object.assign({
                addClass: className => root.setState(prevState => ({
                    classes: prevState.classes.add(className),
                })),
                removeClass: className => root.setState(prevState => ({
                    classes: prevState.classes.remove(className),
                })),
                setAttr: (attr, name) => root.setState(prevState => ({
                    attributes: prevState.attributes.set(attr, name),
                })),
                rmAtt: attr => root.setState(prevState => ({
                    attributes: prevState.attributes.delete(attr),
                })),
                computeBoundingRect: () => {
                    const clientRect = root.rootEl.getBoundingClientRect();
                    return ({
                        left: clientRect.left,
                        top: clientRect.top,
                    });
                },
                registerInteractionHandler: (type, handler) => root.setState({
                    [type]: handler,
                }),
                deregisterInteractionHandler: (type, handler) => console.log('deregisterInteractionHandler', type, handler),
                focus: () => console.log('focus'),
                getComputedStyleValue: propertyName => window.getComputedStyle(root.rootEl)[propertyName],
                setStyle: (propertyName, value) => root.setState(prevState => ({
                    style: prevState.style.set(propertyName, value),
                })),
                create2dRenderingContext: () => {
                    const context = document.createElement('canvas').getContext('2d');
                    return ({
                        font: context.font,
                        measureText: txt => context.measureText(txt),
                    });
                },
                setMenuElStyle: (propertyName, value) => {
                    if (propertyName === 'transform-origin') {
                        propertyName = 'transformOrigin';
                    }
                    root.setState(prevState => ({
                        menuElStyle: prevState.menuElStyle.set(propertyName, value),
                    }));
                },
                setMenuElAttr: (attr, value) => root.setState(prevState => ({
                    menuElAttr: prevState.menuElAttr.set(attr, value),
                })),
                rmMenuElAttr: attr => root.setState(prevState => ({
                    menuElAttr: prevState.menuElAttr.delete(attr),
                })),
                getMenuElOffsetHeight: () => window.getComputedStyle(root.menuRoot).lineHeight,
                openMenu: number => root.setState(prevState => ({
                    menuClasses: prevState.menuClasses.add('mdc-simple-menu--open'),
                    isMenuOpen: true,
                })), // console.log('openMenu', number),
                isMenuOpen: () => root.state.isMenuOpen,
                getNumberOfOptions: () => root.menuRoot.childNodes[0].childElementCount,
                getTextForOptionAtIndex: index => root.menuRoot.childNodes[0].childNodes[index].innerText,
                getValueForOptionAtIndex: index => console.log('getValueForOptionAtIndex', index),
                setAttrForOptionAtIndex: (index, attr, value) => console.log('setAttrForOptionAtIndex', index, attr, value),
                rmAttrForOptionAtIndex: (index, attr) => console.log('rmAttrForOptionAtIndex', index, attr),
                getOffsetTopForOptionAtIndex: index => 0, // root.menuRoot.childNodes[index].offsetTop,
                registerMenuInteractionHandler: (type, handler) => root.setState({
                    [type]: handler,
                }),
                deregisterMenuInteractionHandler: (type, handler) => root.setState({
                    [type]: handler,
                }),
                notifyChange: () => console.log('notifyChange'),
                getWindowInnerHeight: () => window.innerHeight,
            }),
        );
    }
}
