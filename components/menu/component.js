import { MDCSimpleMenuFoundation } from '@material/menu';

export default class MDCSimpleMenu extends MDCSimpleMenuFoundation {
    constructor(root) {
        super();
        this.adapter_ = Object.assign({

            addClass: className => root.setState(prevState => ({
                classes: prevState.classes.add(className),
            })),
            removeClass: className => root.setState(prevState => ({
                classes: prevState.classes.remove(className),
            })),
            hasClass: className => root.state.classes.contains(className),
            hasNecessaryDom: () => Boolean(root),
            getInnerDimensions: () => root.root,
            getWindowDimensions: () => console.log('getWindowDimensions'),
            // setScale: (x, y) => console.log('setScale', x, y),
            // setInnerScale: (x, y) => console.log('setInnerScale', x, y),
            // getNumberOfItems: () => console.log('getNumberOfItems'),
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
            getYParamsForItemAtIndex: index => console.log('getYParamsForItemAtIndex', index),
            setTransitionDelayForItemAtIndex: (index, value) => console.log('setTransitionDelayForItemAtIndex', index, value),
            getIndexForEventTarget: target => root.setState({
                selectedItem: target,
            }),
            // notifySelected: evtData => console.log('notifySelected', evtData),
            // notifyCancel: () => console.log('notifyCancel'),
            saveFocus: () => console.log('saveFocus'),
            // restoreFocus: () => console.log('restoreFocus'),
            isFocused: () => console.log('isFocused'),
            focus: () => console.log('focus'),
            // getFocusedItemIndex: () => console.log('getFocusedItemIndex'),
            focusItemAtIndex: index => console.log('focusItemAtIndex', index),
        });
    }
}
