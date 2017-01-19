import '@material/radio/dist/mdc.radio.css';
import classNames from 'classnames';
import React, { PropTypes, PureComponent } from 'react';
import { Set as ImmutableSet } from 'immutable';
import MDCRadio from './component';

// TODO: componentWillReceiveProp lifecycle.
// TODO: grouping radio buttons. children?

class Radio extends PureComponent {
    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        label: PropTypes.string,
    };
    state={
        checked: this.props.checked === 'on',
        classes: new ImmutableSet(),
        disabled: this.props.disabled,
    };
    componentDidMount() {
        const { disabled } = this.props;
        this.foundation = new MDCRadio(this);
        this.foundation.init();

        if (disabled) {
            this.foundation.setDisabled(disabled);
        }
    }
    componentWillUnmount() {
        this.foundation().destroy();
    }
    handleClick=(evt) => {
        const checked = evt.target.value === 'on';
        console.log('handleClick', checked, evt.target.value);
        this.setState({
            checked,
        });
    };
    render() {
        const { checked, classes, disabled } = this.state;
        const { label } = this.props;
        return (
            <div>
                <div className={classNames('mdc-radio', classes.toJS().join(' '))} >
                    <input
                        disabled={disabled}
                        onClick={evt => this.handleClick(evt)}
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
            </div>
        );
    }
}
export default Radio;
