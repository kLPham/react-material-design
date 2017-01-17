import React, { PropTypes, PureComponent } from 'react';
import { MDCSimpleMenuFoundation } from '@material/menu';
import { Set as ImmutableSet } from 'immutable';
import '@material/menu/dist/mdc.menu.css';
import '@material/button/dist/mdc.button.css';
import MenuItem from '../menuItem';

// TODO: Menu presentation types: button, action (see textfield dropdown menu), other control.
// TODO: disable menu.
// TODO: Support all permintations of "Button"/"Icon".
// TODO: I'm thinking that notifySelected is suppoed to be used insted of getIndexForEventTarget.
// TODO: Positioning the menu.
// TODO: hasClass, hasNecessaryDom are hacks.
// TODO: investigate how registerDocumentClickHandler is different than the click generated with registerInteractionHandler

// import { buttoncssClasses } from '../classes';
// const { OPEN } = MDCSimpleMenuFoundation.cssClasses;
const withFoundation = WrappedComponent =>
class extends PureComponent {
    state = {
        classes: new ImmutableSet().add('mdc-simple-menu'),
        selectedItem: null,
    };

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    menu;
    foundation = new MDCSimpleMenuFoundation({
        addClass: className => this.setState(prevState => ({
            classes: prevState.classes.add(className),
        })),
        removeClass: className => this.setState(prevState => ({
            classes: prevState.classes.remove(className),
        })),
        hasClass: className => this.state.classes.contains(className),
        hasNecessaryDom: () => Boolean(WrappedComponent),
        getInnerDimensions: () => this.root,
        getWindowDimensions: () => console.log('getWindowDimensions'),
        // setScale: (x, y) => console.log('setScale', x, y),
        // setInnerScale: (x, y) => console.log('setInnerScale', x, y),
        // getNumberOfItems: () => console.log('getNumberOfItems'),
        registerInteractionHandler: (type, handler) => this.setState({
            [type]: handler,
        }), // this.root.addEventListener(type, handler),
        deregisterInteractionHandler: (type, handler) => this.setState({
            [type]: handler,
        }),
        registerDocumentClickHandler: handler => this.setState({
            onClick: handler,
        }),
        deregisterDocumentClickHandler: handler => this.setState({
            onClick: handler,
        }),
        getYParamsForItemAtIndex: index => console.log('getYParamsForItemAtIndex', index),
        setTransitionDelayForItemAtIndex: (index, value) => console.log('setTransitionDelayForItemAtIndex', index, value),
        getIndexForEventTarget: target => this.setState({
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
    render() {
        return (
            <WrappedComponent
                handleClick={this.handleClick}
                {...this.props}
                {...this.state}
            />
        );
    }
};
export default withFoundation;
