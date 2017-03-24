import '@material/checkbox/dist/mdc.checkbox.css';
import React, { PropTypes, PureComponent } from 'react';
import classNames from 'classnames';
import { Set as ImmutableSet } from 'immutable';
import FormField from '../formField';
import MDCCheckbox from './component';
import uuid from 'uuid-v4';
// TODO: Indeterminate see: https://css-tricks.com/indeterminate-checkboxes/
// TODO: removed controlid, when there are more checkboxes does this mess stuff up?
class Checkbox extends PureComponent {
    static propTypes = {
        alignEnd: PropTypes.bool,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        indeterminate: PropTypes.bool,
        label: PropTypes.string,
        labelId: PropTypes.string,
    };

    static defaultProps = {
        alignEnd: false,
        checked: false,
        disabled: false,
        indeterminate: false,
        label: '',
    };
    constructor(props) {
        super(props);
        const { checked, disabled, label } = props;
        this.state = {
            checked,
            disabled,
            classes: new ImmutableSet(),
            label,
        };
    }
    componentDidMount() {
        this.foundation = new MDCCheckbox(this);
        console.dir(MDCCheckbox);
        console.dir(this.foundation);

        this.foundation.init();
    }
    componentWillReceiveProps(nextProps) {
        const { checked, indeterminate } = this.props;
        if (nextProps.checked !== checked) {
            this.setState({
                checked: nextProps.checked,
                indeterminate: false,
            });
        }
        if (nextProps.indeterminate !== indeterminate) {
            this.setState({
                indeterminate: nextProps.indeterminate,
            });
        }
    }
    componentDidUpdate() {
        // if (this.nativeCb) {
        //     this.nativeCb.indeterminate = this.state.indeterminate;
        // }
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
    handleChange = () => {
        const checked = this.state.checked;
        this.setState({
            checked: !checked,
            indeterminate: false,
        });
    };
    render() {
        const { checked, disabled, label, classes } = this.state;
        const { alignEnd, labelId } = this.props;
        const id = uuid();
        return (
            <FormField
                alignEnd={alignEnd}
            >
                <div className={classNames('mdc-checkbox', classes.toJS().join(' '))}>
                    <input
                        id={`mdc-checkbox--${id}`}
                        type="checkbox"
                        className="mdc-checkbox__native-control"
                        aria-labelledby={labelId}
                        disabled={disabled}
                        checked={checked}
                        onChange={() => this.handleChange()}
                    />
                    <div className="mdc-checkbox__background">
                        <svg
                            version="1.1"
                            className="mdc-checkbox__checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className="mdc-checkbox__checkmark__path"
                                fill="none"
                                stroke="white"
                                d="M1.73,12.91 8.1,19.28 22.79,4.59"
                            />
                        </svg>
                        <div className="mdc-checkbox__mixedmark" />
                    </div>
                </div>
                <label htmlFor={`mdc-checkbox--${id}`} className="mdc-checkbox-label">{label}</label>
            </FormField>
        );
    }
}
export default Checkbox;
