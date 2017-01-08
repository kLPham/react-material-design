import React, { PropTypes, PureComponent } from 'react';
import { Set as ImmutableSet } from 'immutable';
import { MDCCheckboxFoundation } from '@material/checkbox';
import '@material/checkbox/dist/mdc.checkbox.css';
import FormField from '../formField';

const { ANIM_END_EVENT_NAME } = MDCCheckboxFoundation.strings;

class Checkbox extends PureComponent {
    static propTypes = {
        alignEnd: PropTypes.bool,
        labelId: PropTypes.string,
        checked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        onChange: PropTypes.func,
        controlId: PropTypes.number,
        label: PropTypes.string,
    };

    static defaultProps = {
        checked: false,
        indeterminate: false,
        onChange: () => {},
    };

    state = {
        classes: new ImmutableSet(),
        checkedInternal: false,
        indeterminateInternal: false,
    };
// Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
// so that proper work can be performed.
    componentDidMount() {
        this.foundation.init();
    }
// Here we synchronize the internal state of the UI component based on what the user has specified.
    componentWillReceiveProps(props) {
        if (props.checked !== this.props.checked) {
            this.setState({ checkedInternal: props.checked, indeterminateInternal: false });
        }
        if (props.indeterminate !== this.props.indeterminate) {
            this.setState({ indeterminateInternal: props.indeterminate });
        }
    }
// Since we cannot set an indeterminate attribute on a native checkbox, we use componentDidUpdate to update
// the indeterminate value of the native checkbox whenever a change occurs (as opposed to doing so within
// render()).
    componentDidUpdate() {
        if (this.nativeCb) {
            this.nativeCb.indeterminate = this.state.indeterminateInternal;
        }
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
// Here we initialize a foundation class, passing it an adapter which tells it how to
// work with the React component in an idiomatic way.
    foundation = new MDCCheckboxFoundation({
        addClass: className => this.setState(prevState => ({
            classes: prevState.classes.add(className),
        })),
        removeClass: className => this.setState(prevState => ({
            classes: prevState.classes.remove(className),
        })),
        registerAnimationEndHandler: (handler) => {
            if (this.root) {
                this.root.addEventListener(ANIM_END_EVENT_NAME, handler);
            }
        },
        deregisterAnimationEndHandler: (handler) => {
            if (this.root) {
                this.root.removeEventListener(ANIM_END_EVENT_NAME, handler);
            }
        },
        registerChangeHandler: (handler) => {
    // Note that this could also be handled outside of using the native DOM API.
    // For example, onChange within render could delegate to a function which calls
    // the handler passed here, as well as performs the other business logic. The point
    // being our foundations are designed to be adaptable enough to fit the needs of the host
    // platform.
            if (this.nativeCb) {
                this.nativeCb.addEventListener('change', handler);
            }
        },
        deregisterChangeHandler: (handler) => {
            if (this.nativeCb) {
                this.nativeCb.removeEventListener('change', handler);
            }
        },
        getNativeControl: () => {
            if (!this.nativeCb) {
                throw new Error('Invalid state for operation');
            }
            return this.nativeCb;
        },
        forceLayout: () => this.nativeCb.offsetWidth,
        isAttachedToDOM: () => Boolean(this.nativeCb),
    });

    render() {
    // Within render, we generate the html needed to render a proper MDC-Web checkbox.
        return (
            <FormField alignEnd={this.props.alignEnd}>
                <div ref={(d) => { this.root = d; }} className={`mdc-checkbox ${this.state.classes.toJS().join(' ')}`}>
                    <input
                        ref={(i) => { this.nativeCb = i; }}
                        id={this.props.controlId}
                        type="checkbox"
                        className="mdc-checkbox__native-control"
                        aria-labelledby={this.props.labelId}
                        checked={this.state.checkedInternal}
                        onChange={(evt) => {
                            this.setState({
                                checkedInternal: this.nativeCb.checked,
                                indeterminateInternal: false,
                            });
                            this.props.onChange(evt);
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
                <label htmlFor={this.props.controlId} className="mdc-checkbox-label">{this.props.label}</label>
            </FormField>
        );
    }
}
export default Checkbox;
