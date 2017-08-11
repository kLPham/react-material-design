import React from 'react';
import _ from 'lodash';
import jsxToString from 'jsx-to-string';
import Playground from 'component-playground';
import { LinearProgress } from '../../../../components/react-material-design';
import '@material/linear-progress/dist/mdc.linear-progress.css';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/linear-progress/'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);

const ProgressActivity = () =>
    (<div>
        <h1>Progress and Activity</h1>
        <h2>Linear Progress</h2>
        <Playground
          collapsableCode
          codeText={jsxToString(
              <code>
                  <LinearProgress progress={0.22} /> <br />
                  <LinearProgress accent progress={0.22} /> <br />
                  <LinearProgress indeterminate /> <br />
                  <LinearProgress accent indeterminate /> <br />
                  <LinearProgress indeterminate reversed /> <br />
                  <LinearProgress progress={0.22} buffer={0.40} /> <br />
                  <LinearProgress accent progress={0.22} buffer={0.40} /> <br />
                  <LinearProgress progress={0.22} buffer={0.40} reversed /> <br />
              </code>)}
          scope={{ React, LinearProgress }}
        />
        {docsComponent}
    </div>);
export default ProgressActivity;
