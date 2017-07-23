import '@material/linear-progress/dist/mdc.linear-progress.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { MDCLinearProgress } from '@material/linear-progress';

class LinearProgress extends Component {
    static propTypes = {
        accent: PropTypes.bool,
        buffer: PropTypes.number,
        indeterminate: PropTypes.bool,
        progress: PropTypes.number,
        reversed: PropTypes.bool,
    }
    componentDidMount() {
        const { buffer, indeterminate, progress, reversed } = this.props;
        this.linearProgress = new MDCLinearProgress(this.mainRoot);
        this.linearProgress.foundation_.setDeterminate(!indeterminate);
        this.linearProgress.foundation_.setProgress(progress);
        this.linearProgress.foundation_.setBuffer(buffer);
        this.linearProgress.foundation_.setReverse(reversed);
    }
    render() {
        const { accent } = this.props;
        return (
            <div
                role="progressbar"
                className={classNames('mdc-linear-progress', { 'mdc-linear-progress--accent': accent })}
                ref={(d) => { this.mainRoot = d; }}
            >
                <div className="mdc-linear-progress__buffering-dots" />
                <div className="mdc-linear-progress__buffer" />
                <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
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
