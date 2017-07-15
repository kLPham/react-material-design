import '@material/radio/dist/mdc.radio.css';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Set as ImmutableSet } from 'immutable';
import { v4 } from 'uuid';
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
        const id = v4();
        return (
            <FormField alignEnd={alignEnd}>
                <div className={classNames('mdc-radio', classes.toJS().join(' '))} >
                    <input
                        checked={checked}
                        className="mdc-radio__native-control"
                        disabled={disabled}
                        id={`mdc-radio--${id}`}
                        onChange={e => this.handleChange(e)}
                        type="radio"
                    />
                    <div className="mdc-radio__background">
                        <div className="mdc-radio__outer-circle" />
                        <div className="mdc-radio__inner-circle" />
                    </div>
                </div>
                {label && <label id={`mdc-radio-label--${id}`} htmlFor={`mdc-radio--${id}`}>{label}</label>}
            </FormField>
        );
    }
}
export default Radio;
