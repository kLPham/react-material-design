import { MDCLinearProgressFoundation } from '@material/linear-progress';

export default class MDCLinearProgress extends MDCLinearProgressFoundation {
    constructor(root) {
        super({
            addClass: className => root.setState(({ classes }) => ({
                classes: classes.add(className),
            })),
            removeClass: className => root.setState(({ classes }) => ({
                classes: classes.remove(className),
            })),
            hasClass: className => Boolean(root.state.classes.get(className)),
            getPrimaryBar: () => 'primaryBar',
            getBuffer: () => 'buffer',
            setTransform: (el, value) => console.log('setTransform', el, value),
            setStyle: (el, transformStyleProperty, value) => root.setState(prevState => ({
                [`${el}Styles`]: prevState[`${el}Styles`].set(transformStyleProperty, value),
            })),
        });
    }
}
