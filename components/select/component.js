import { MDCSelectFoundation } from '@material/select';

export default class MDCSelect extends MDCSelectFoundation {
    constructor(root) {
        super({
            addClass: className => root.setState(prevState => ({
                classes: prevState.classes.add(className),
            })),
            removeClass: className => root.setState(prevState => ({
                classes: prevState.classes.remove(className),
            })),
            setAttr: (attr, value) => root.setState(({ attributes }) => ({
                attributes: attributes.set(attr, value),
            })),
            rmAttr: attr => root.setState(({ attributes }) => ({
                attributes: attributes.delete(attr),
            })),
            computeBoundingRect: () => root.rootEl.getBoundingClientRect(),
            registerInteractionHandler: (type, handler) => root.setState({
                [type]: handler,
            }),
            deregisterInteractionHandler: (type, handler) => root.setState({
                [type]: handler,
            }),
            focus: () => root.rootEl.focus(),
            makeTabbable: () => root.rootEl.tabIndex = 0,
            makeUntabbable: () => root.rootEl.tabIndex = -1,
            getComputedStyleValue: propertyName => window.getComputedStyle(root.rootEl).getPropertyValue(propertyName),
            setStyle: (propertyName, value) => root.setState(({ style }) => ({
                style: style.set(propertyName, value),
            })),
            create2dRenderingContext: () => document.createElement('canvas').getContext('2d'),
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
            getMenuElOffsetHeight: () => root.menuEl.offsetHeight,
            openMenu: focusIndex => root.setState(prevState => ({
                menuClasses: prevState.menuClasses.add('mdc-simple-menu--open'),
                isMenuOpen: true,
            })),
            isMenuOpen: () => root.state.isMenuOpen,
            setSelectedTextContent: setSelectedTextContent => console.log('setSelectedTextContent', setSelectedTextContent),
            getNumberOfOptions: () => root.menuEl.childNodes[0].childElementCount,
            getTextForOptionAtIndex: index => root.menuEl.childNodes[0].childNodes[index].textContent,
            getValueForOptionAtIndex: index => root.menuEl.childNodes[0].childNodes[index].id || root.menuEl.childNodes[0].childNodes[index].textContent,
            setAttrForOptionAtIndex: (index, attr, value) => root.menuEl.childNodes[0].childNodes[index].setAttribute(attr, value),
            rmAttrForOptionAtIndex: (index, attr) => root.menuEl.childNodes[0].childNodes[index].removeAttribute(attr),
            getOffsetTopForOptionAtIndex: index => root.menuEl.childNodes[0].childNodes[index].offsetTop,
            registerMenuInteractionHandler: (type, handler) => root.setState({
                [type]: handler,
            }),
            deregisterMenuInteractionHandler: (type, handler) => root.setState({
                [type]: handler,
            }),
            notifyChange: () => console.log('notifyChange'),
            getWindowInnerHeight: () => window.innerHeight,
        });
    }
}
