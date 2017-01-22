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
            }),
        );
    }
}
