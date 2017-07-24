import React from 'react';
import { Tab, TabBar, TabBarScroller } from '../../../../components/react-material-design';

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
    </div>
);
export default TabsExample;
