import React from 'react';
import _ from 'lodash';
import jsxToString from 'jsx-to-string';
import Playground from 'component-playground';
import { List, ListItem, ListDivider } from '../../../../components/react-material-design';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/list/'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);

const Lists = () =>
    (<div>
        <h1>Lists</h1>
        <h2>Basic, Two-Line, Dense, and Two-line</h2>
        <Playground
          collapsableCode
          codeText={jsxToString(
              <code>
                  <List>
                      <ListItem value="Item One" />
                      <ListItem value="Item Two" />
                  </List>
                  <List dense>
                      <ListItem value="Dense Item One" />
                      <ListItem value="Dense Item Two" />
                  </List>
                  <List>
                  <ListItem value="Item 1" secondaryValue="Secondary Value 1" />
                  <ListItem value="Item 2" secondaryValue="Secondary Value 2" />
              </List>
              </code>)}
          scope={{ React, List, ListItem }}
        />
       
        <h2>Left, and Right Icons, Avatar, Right Icon and Avatar</h2>
        <Playground
          collapsableCode
          codeText={jsxToString(
              <code>
                  <List>
                      <ListItem icon="network_wifi" value="Wi-Fi" />
                      <ListItem icon="bluetooth" value="Bluetooth" />
                      <ListItem iconRight="favorite" rightTitle="Add to favorites" value="Janet Perkins" />
                      <ListItem avatarSrc="https://www.goodfreephotos.com/albums/vector-images/george-washington-portrait.png" value="George Washington" />
                      <ListItem iconRight="favorite_border" avatarSrc="https://www.goodfreephotos.com/albums/people/theodore-roosevelt-portrait.jpg" value="Theodore Roosevelt" />
                  </List>
              </code>)}
          scope={{ React, List, ListItem }}
        />

        <h2>List Dividers and inset</h2>
        <Playground
          collapsableCode
          codeText={jsxToString(
              <code>
                  <List>
                      <ListItem value="Item 1 - Division 1" />
                      <ListDivider />
                      <ListItem value="Item 1 - Division 2" />
                      <ListDivider inset />
                      <ListItem value="Item after inset - Division 3" />
                  </List>
              </code>)}
          scope={{ React, List, ListItem, ListDivider }}
        />

        {docsComponent}
    </div>);
export default Lists;
