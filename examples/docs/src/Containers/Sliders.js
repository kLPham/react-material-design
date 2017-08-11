import React from 'react';
import _ from 'lodash';
import jsxToString from 'jsx-to-string';
import Playground from 'component-playground';
import { Slider } from '../../../../components/react-material-design';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/slider/'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);

const Sliders = () => (
    <div>
        <h1>Sliders</h1>
        <Playground
          collapsableCode
          codeText={jsxToString(
              <code>
                  <Slider />
                  <Slider initialValue={20} />
                  <Slider disabled />
              </code>)}
          scope={{ React, Slider }}
        />
        {docsComponent}
    </div>
          );
export default Sliders;
