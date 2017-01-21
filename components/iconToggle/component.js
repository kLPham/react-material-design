import { MDCIconToggleFoundation } from '@material/icon-toggle';

export default class MDCIconToggle extends MDCIconToggleFoundation {
    constructor(root) {
        super(
        Object.assign({
            addClass: className => root.setState(prevState => ({
                classes: prevState.classes.add(className),
            })),
            removeClass: className => root.setState(prevState => ({
                classes: prevState.classes.remove(className),
            })),
            registerInteractionHandler: (type, handler) => root.setState({
                [type]: handler,

            }),
            degisterInteractionHandler: (type, handler) => root.setState({
                [type]: handler,
            }),
            setText: text => root.setState({
                icon: text,
            }),
            getTabIndex: tabIndex => console.log('getTabIndex', tabIndex),
            setTabIndex: tabIndex => console.log('setTabIndex', tabIndex),
            getAttr: name => root.state[name],
            setAttr: (name, value) => root.setState({
                [name]: value,
            }),
            rmAttr: name => root.setState({
                [name]: null,
            }),
            notifyChange: evtData => console.log('notifyChange', evtData),

        }),
        );
    }
}
