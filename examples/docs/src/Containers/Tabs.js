import React from 'react';
import _ from 'lodash';
import { Tab, TabBar, TabBarScroller } from '../../../../components/react-material-design';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/tabs'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);

const TabsExample = () => (
    <div>
        <h1>Tabs</h1>
        <h2>Basic</h2>
        <TabBar>
            <Tab active icon="phone" />
            <Tab icon="alarm" label="alarm" />
        </TabBar>
        <h2>Tab Bar Scroller</h2>
        <TabBarScroller />
        {docsComponent}
    </div>
);
export default TabsExample;
