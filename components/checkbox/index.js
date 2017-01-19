import React, { PropTypes, Component } from 'react';
import { Set as ImmutableSet } from 'immutable';
import '@material/checkbox/dist/mdc.checkbox.css';
import MDCCheckbox from './component';

// TODO: state/props evaluation.
// TODO: understand how this affects React.MDCCheckboxFoundation.isIndeterminate() => boolean Returns whether or not the underlying input is indeterminate. Returns false when no input is available.
// TODO: removed controlid, when there are more checkboxes does this mess stuff up?

class Checkbox extends Component {
    static propTypes = {
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        labelId: PropTypes.string,
        label: PropTypes.string,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        checked: false,
        disabled: false,
        indeterminate: false,
    };

    state = {
        classes: new ImmutableSet(),
        checked: this.props.checked,
    };
    componentDidMount() {
        this.foundation = new MDCCheckbox(this);
        this.foundation.init();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.props.checked) {
            this.setState({ checked: nextProps.checked, indeterminate: false });
        }
        if (nextProps.indeterminate !== this.props.indeterminate) {
            this.setState({ indeterminate: nextProps.indeterminate });
        }
    }
    componentDidUpdate() {
        if (this.nativeCb) {
            this.nativeCb.indeterminate = this.state.indeterminate;
        }
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
    foundation;
    render() {
        const { checked, onChange } = this.state;
        const { label, labelId, disabled } = this.props;
        return (
            <div>
                <div className={`mdc-checkbox ${this.state.classes.toJS().join(' ')}`}>
                    <input
                        id="mdc-checkbox"
                        type="checkbox"
                        className="mdc-checkbox__native-control"
                        aria-labelledby={labelId}
                        disabled={disabled}
                        checked={checked}
                        onChange={(evt) => {
                            this.setState({
                                checked: !checked,
                                indeterminate: false,
                            });
                            console.log('onChange', onChange, evt);
                            onChange(evt);
                        }}
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
                <label htmlFor="mdc-checkbox" className="mdc-checkbox-label">{label}</label>
            </div>
        );
    }
}
export default Checkbox;
