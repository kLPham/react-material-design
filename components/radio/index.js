import '@material/radio/dist/mdc.radio.css';
import classNames from 'classnames';
import React, { PropTypes, PureComponent } from 'react';
import { Set as ImmutableSet } from 'immutable';
import MDCRadio from './component';
import FormField from '../formField';
// TODO: componentWillReceiveProp lifecycle.
// TODO: grouping radio buttons. children?

class Radio extends PureComponent {
    static propTypes = {
        alignEnd: PropTypes.bool,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        label: PropTypes.string,
    };
    static defaultProps = {
        alignEnd: false,
        checked: false,
        disabled: false,
        label: '',
    };
    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
            classes: new ImmutableSet(),
            disabled: props.disabled,
            label: props.label,
        };
    }
    componentDidMount() {
        const { disabled } = this.props;
        this.foundation = new MDCRadio(this);

        if (disabled) {
            this.foundation.setDisabled(disabled);
        }
    }
    handleChange=(e) => {
        const checked = e.target.value;
        this.foundation.setChecked(checked);
        this.setState({
            checked,
        });
    };
    render() {
        const { checked, classes, disabled, label } = this.state;
        const { alignEnd } = this.props;
        return (
            <FormField alignEnd={alignEnd}>
                <div className={classNames('mdc-radio', classes.toJS().join(' '))} >
                    <input
                        disabled={disabled}
                        onChange={e => this.handleChange(e)}
                        className="mdc-radio__native-control"
                        type="radio"
                        id="radio-1"
                        name="radios"
                        checked={checked}
                    />
                    <div className="mdc-radio__background">
                        <div className="mdc-radio__outer-circle" />
                        <div className="mdc-radio__inner-circle" />
                    </div>
                </div>
                <label id="radio-1-label" htmlFor="radio-1">{label}</label>
            </FormField>
        );
    }
}
export default Radio;
