import React from 'react';
import _ from 'lodash';
import { Slider } from '../../../../components/react-material-design';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/slider/'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);

const Sliders = () => (
    <div>
        <h1>Sliders</h1>
        <h2>Continuous Sliders</h2>
        <Slider />
        <Slider initialValue={20} />
        <h3>Disabled</h3>
        <Slider disabled />
        {docsComponent}
    </div>
          );
export default Sliders;
