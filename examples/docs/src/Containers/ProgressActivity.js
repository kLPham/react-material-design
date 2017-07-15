import React from 'react';
import { LinearProgress } from '../../../../components/react-material-design';
import '@material/linear-progress/dist/mdc.linear-progress.css';

const ProgressActivity = () =>
    (<div>
        <h1>Progress and Activity</h1>
        <h2>Linear Progress</h2>
        <h3>Determinate</h3>
        <LinearProgress progress={0.22} />
        <h4>Determinate Accent</h4>
        <LinearProgress accent progress={0.22} />
        <h3>Indeterminate</h3>
        <LinearProgress indeterminate />
        <h4>Indeterminate Accent</h4>
        <LinearProgress accent indeterminate />
        <h4>Indeterminate Reversed</h4>
        <LinearProgress indeterminate reversed />
        <h3>Buffer</h3>
        <LinearProgress progress={0.22} buffer={0.40} />
        <h4>Buffer Accent</h4>
        <LinearProgress accent progress={0.22} buffer={0.40} />
        <h4>Buffer Reversed</h4>
        <LinearProgress progress={0.22} buffer={0.40} reversed />
    </div>);
export default ProgressActivity;
