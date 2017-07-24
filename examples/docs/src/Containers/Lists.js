import React from 'react';
import CodeToggle from 'react-code-toggle';
import { parse } from 'react-docgen';
import { List, ListItem, ListDivider } from '../../../../components/react-material-design';
// import { List, ListItem, ListDivider } from 'react-material-design';
import Docs from '../Components/docs';
import ListDoc from '!raw-loader!../../../../components/list';
import ListDividerDoc from '!raw-loader!../../../../components/list/ListDivider';
import ListItemDoc from '!raw-loader!../../../../components/list/ListItem';

const parsedListDoc = parse(ListDoc);
const parsedListDividerDoc = parse(ListDividerDoc);
const parsedListItemDoc = parse(ListItemDoc);

const Lists = () =>
    (<div>
        <h1>Lists</h1>
        <h2>Basic</h2>
        <CodeToggle>
            <List>
                <ListItem value="Item One" />
                <ListItem value="Item Two" />
                <ListItem value="Item Two" />
            </List>
        </CodeToggle>
        <h2>Dense</h2>
        <CodeToggle>
            <List dense>
                <ListItem value="Item One" />
                <ListItem value="Item Two" />
                <ListItem value="Item Two" />
            </List>
        </CodeToggle>
        <h2>Left Icons</h2>
        <CodeToggle>

            <List>
                <ListItem value="No Icon" />
                <ListItem icon="network_wifi" value="Wi-Fi" />
                <ListItem icon="bluetooth" value="Bluetooth" />
            </List>
        </CodeToggle>

        <h2>Avatar</h2>
        <CodeToggle>
            <List>
                <ListItem avatarSrc="https://www.goodfreephotos.com/albums/vector-images/george-washington-portrait.png" value="George Washington" />
                <ListItem avatarSrc="https://www.goodfreephotos.com/albums/vector-images/abraham-lincoln-vector-clipart.png" value="Abraham Lincoln" />
                <ListItem avatarSrc="https://www.goodfreephotos.com/albums/people/theodore-roosevelt-portrait.jpg" value="Theodore Roosevelt" />
            </List>
        </CodeToggle>
        <h2>Right Icon</h2>
        <CodeToggle>
            <List>
                <ListItem iconRight="favorite" rightTitle="Add to favorites" value="Janet Perkins" />
                <ListItem iconRight="favorite_border" value="Mary Johnson" />
            </List>
        </CodeToggle>
        <h2>Avatar and Right Icon</h2>
        <CodeToggle>
            <List>
                <ListItem iconRight="favorite" rightTitle="Add to favorites" value="Janet Perkins" />
                <ListItem avatarSrc="https://www.goodfreephotos.com/albums/vector-images/abraham-lincoln-vector-clipart.png" value="Mary Johnson" />
                <ListItem iconRight="favorite_border" avatarSrc="https://www.goodfreephotos.com/albums/people/theodore-roosevelt-portrait.jpg" value="Theodore Roosevelt" />
            </List>
        </CodeToggle>
        <h2>List Dividers and inset</h2>
        <CodeToggle>
            <List>
                <ListItem value="Item 1 - Division 1" />
                <ListItem value="Item 2 - Division 1" />
                <ListDivider />
                <ListItem value="Item 1 - Division 2" />
                <ListItem value="Item 2 - Division 2" />
                <ListDivider inset />
                <ListItem value="Item after inset - Division 3" />
                <ListItem value="Item 2 - Division 3" />
            </List>
        </CodeToggle>
        <h2>Two-line List</h2>
        <CodeToggle>
            <List>
                <ListItem value="Item 1" secondaryValue="Secondary Value 1" />
                <ListItem value="Item 2" secondaryValue="Secondary Value 2" />
            </List>
        </CodeToggle>
        <h3>One Item</h3>
        <CodeToggle>
            <List>
                <ListItem value="Item 1" secondaryValue="Secondary Value 1" />
            </List>
        </CodeToggle>
        <Docs componentDocs={parsedListDoc} />
        <Docs componentDocs={parsedListItemDoc} />
        <Docs componentDocs={parsedListDividerDoc} />

    </div>);
export default Lists;
