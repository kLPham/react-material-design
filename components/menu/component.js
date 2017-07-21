import { MDCSimpleMenuFoundation } from '@material/menu';
import { getTransformPropertyName } from '@material/menu/util';

export default class MDCSimpleMenu extends MDCSimpleMenuFoundation {
    constructor(root) {
        super({
            addClass: className => root.setState(prevState => ({
                classes: prevState.classes.add(className),
            })),
            removeClass: className => root.setState(prevState => ({
                classes: prevState.classes.remove(className),
            })),
            hasClass: className => root.state.classes.contains(className),
            hasNecessaryDom: () => Boolean(root.itemsContainer),
            getAttributeForEventTarget: (target, attributeName) => target.getAttribute(attributeName),
            getInnerDimensions: () => ({
                width: root.itemsContainer.offsetWidth,
                height: root.itemsContainer.offsetHeight,
            }),
            hasAnchor: () => root.parentElement && this.root_.parentElement.classList.contains('mdc-menu-anchor'),
            getAnchorDimensions: () => root.mainRoot.parentElement.getBoundingClientRect(),
            getWindowDimensions: () => {
                const { innerHeight, innerWidth } = window;
                return ({
                    width: innerWidth,
                    height: innerHeight,
                });
            },
            setScale: (x, y) => {
                root.mainRoot.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`;
            },
            setInnerScale: (x, y) => root.itemsContainer.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`,
            getNumberOfItems: () => root.itemsContainer.childElementCount,
            registerInteractionHandler: (type, handler) => root.setState({
                [type]: handler,
            }),
            deregisterInteractionHandler: (type, handler) => root.setState({
                [type]: handler,
            }),
            registerBodyClickHandler: handler => root.setState({
                onClick: handler,
            }),
            deregisterBodyClickHandler: handler => root.setState({
                onClick: handler,
            }),
            getYParamsForItemAtIndex: (index) => {
                const { offsetTop, offsetHeight } = root.itemsContainer.childNodes[index];
                return ({
                    top: offsetTop,
                    height: offsetHeight,
                });
            },
            setTransitionDelayForItemAtIndex: (index, value) => root.itemsContainer.childNodes[index].style.setProperty('transition-delay', value),
            getIndexForEventTarget: target => Array.from(root.itemsContainer.childNodes).findIndex(child => child.id === target.id),
            notifySelected: evtData => console.log('notifySelected', evtData),
            notifyCancel: () => console.log('notifyCancel'),
            saveFocus: () => root.previousFocus_ = document.activeElement,
            restoreFocus: () => {
                if (root.previousFocus_) {
                    root.previousFocus_.focus();
                }
            },
            isFocused: () => document.activeElement === root.mainRoot,
            focus: () => root.mainRoot.focus(),
            getFocusedItemIndex: () => Array.from(root.itemsContainer.childNodes).findIndex(child => child.id === document.activeElement.id),
            focusItemAtIndex: index => root.itemsContainer.childNodes[index].focus(),
            isRtl: () => false,
            setTransformOrigin: (value) => {
                root.mainRoot.style[`${getTransformPropertyName(window)}-origin`] = value;
            },
            setPosition: (position) => {
                root.mainRoot.style.left = 'left' in position ? position.left : null;
                root.mainRoot.style.right = 'right' in position ? position.right : null;
                root.mainRoot.style.top = 'top' in position ? position.top : null;
                root.mainRoot.style.bottom = 'bottom' in position ? position.bottom : null;
            },
            getAccurateTime: () => window.performance.now(),
        });
    }
}
