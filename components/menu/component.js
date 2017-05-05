import { MDCSimpleMenuFoundation } from '@material/menu';

export default class MDCSimpleMenu extends MDCSimpleMenuFoundation {
    constructor(root) {
        super({
            addClass: className => root.setState(prevState => ({
                classes: prevState.classes.add(className),
            })),
            removeClass: className => root.setState(prevState => ({
                classes: prevState.classes.remove(className),
            })),
            hasNecessaryDom: () => Boolean(root),
            getInnerDimensions: () => root.mainRoot.getBoundingClientRect(),
            hasAnchor: () => true,
            getAnchorDimensions: () => root.mainRoot.getBoundingClientRect(),
            getWindowDimensions: () => {
                const { innerHeight, innerWidth } = window;
                return ({
                    width: innerWidth,
                    height: innerHeight,
                });
            },
            setScale: (x, y) => root.mainRoot.style.transform = `scale(${x},${y})`,
            setInnerScale: (x, y) => root.itemContainer.style.transform = `scale(${x},${y})`,
            getNumberOfItems: () => root.mainRoot.childNodes[0].childElementCount,
            registerInteractionHandler: (type, handler) => root.setState({
                [type]: handler,
            }),
            deregisterInteractionHandler: (type, handler) => root.setState({
                [type]: handler,
            }),
            registerDocumentClickHandler: handler => root.setState({
                onClick: handler,
            }),
            deregisterDocumentClickHandler: handler => root.setState({
                onClick: handler,
            }),
            getYParamsForItemAtIndex: (index) => {
                const { offsetTop, offsetHeight } = root.mainRoot.childNodes[0].childNodes[index];
                return ({
                    top: offsetTop,
                    height: offsetHeight,
                });
            },
            setTransitionDelayForItemAtIndex: (index, value) => root.mainRoot.childNodes[0].childNodes[index].style.transitionDelay = value,
            getIndexForEventTarget: target => root.setState({
                selectedItem: target,
            }),
            // notifySelected: evtData => console.log('notifySelected', evtData),
            notifyCancel: () => console.log('notifyCancel'),
            saveFocus: () => console.log('saveFocus'),
            restoreFocus: () => console.log('restoreFocus'),
            isFocused: () => console.log('isFocused'),
            focus: () => root.mainRoot.focus(),
            isRtl: () => false,
            // getFocusedItemIndex: () => console.log('getFocusedItemIndex'),
            focusItemAtIndex: index => console.log('focusItemAtIndex', index),
            setTransformOrigin: value => root.mainRoot.style.transformOrigin = value,
            setPosition: position => console.log('setPosition', position),
            getAccurateTime: () => console.log('getAccurateTime'),
        });
    }
}
