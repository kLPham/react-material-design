import '@material/linear-progress/dist/mdc.linear-progress.css';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Set as ImmutableSet, Map as ImmutableMap } from 'immutable';
import MDCLinearProgress from './component';

// TODO: No reason to have the user provide indeterminate prop. If no progress nor buffer indeterminate?
class LinearProgress extends PureComponent {
    static propTypes = {
        accent: PropTypes.bool,
        buffer: PropTypes.number,
        indeterminate: PropTypes.bool,
        progress: PropTypes.number,
        reverse: PropTypes.bool,
    }
    constructor(props) {
        super(props);
        const { progress, buffer, ...rest } = this.props;
        this.state = {
            primaryBarStyles: new ImmutableMap(),
            bufferStyles: new ImmutableMap(),
            classes: new ImmutableSet(Object.keys(rest).map(item => `mdc-linear-progress--${item}`)),
        };
    }
    componentDidMount() {
        const { progress, buffer } = this.props;
        this.foundation = new MDCLinearProgress(this);
        this.foundation.init();
        if (progress) {
            this.foundation.setProgress(progress);
        }
        if(buffer) {
          this.foundation.setBuffer(buffer);
        }
    }
    handleSetProgress = value => this.foundation.setProgress(value)
    render() {
        const { classes, bufferStyles, primaryBarStyles } = this.state;
        return (
            <div
                role="progressbar"
                className={classNames('mdc-linear-progress', classes.toJS().join(' '))}
            >
                <div className="mdc-linear-progress__buffering-dots" />
                <div className="mdc-linear-progress__buffer" style={bufferStyles.toJS()} />
                <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={primaryBarStyles.toJS()}>
                    <span className="mdc-linear-progress__bar-inner" />
                </div>
                <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                    <span className="mdc-linear-progress__bar-inner" />
                </div>
            </div>
        );
    }
}
export default LinearProgress;
