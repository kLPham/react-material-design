import React from 'react';
import { Tab, Tabs } from '../../../../components/react-material-design';

const TabsExample = () => (
    <div>
        <h1>Tabs</h1>
        <section>
            <Tabs>
                <Tab active icon="phone" to="/one" />
                <Tab icon="alarm" label="alarm" />
            </Tabs>
        </section>
    </div>
);
export default TabsExample;
