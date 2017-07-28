import '@material/slider/dist/mdc.slider.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MDCSlider } from '@material/slider';

class Slider extends Component {
    static propTypes = {
        darkTheme: PropTypes.bool,
        disabled: PropTypes.bool,
        initialValue: PropTypes.number,
    };
    defaultProps= {
        initialValue: 0,
    }
    state={
        value: 0,
    };
    componentDidMount() {
        this.foundation = new MDCSlider(this.mainRoot);
        this.foundation.listen('MDCSlider:change', () =>
        this.setState({
            value: this.foundation.value,
        }),
      );
    }
    componentWillUnmount() {
        this.foundation.destroy();
    }
    render() {
        const { darkTheme, disabled, initialValue } = this.props;
        return (
            <div
                ref={(d) => { this.mainRoot = d; }}
                className={classNames("mdc-slider", {"mdc-slider--theme-dark": darkTheme})}
                tabIndex="0"
                role="slider"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={initialValue}
                aria-label="Select Value"
                aria-disabled={disabled}
            >
                <div className="mdc-slider__track-container">
                    <div className="mdc-slider__track" />
                </div>
                <div className="mdc-slider__thumb-container">
                    <svg className="mdc-slider__thumb" width="21" height="21">
                        <circle cx="10.5" cy="10.5" r="7.875" />
                    </svg>
                    <div className="mdc-slider__focus-ring" />
                </div>
            </div>
        );
    }
}

export default Slider;
