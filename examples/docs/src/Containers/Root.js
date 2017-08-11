import React from 'react';
import jsxToString from 'jsx-to-string';
import Playground from 'component-playground';
import { Button, Card, CardActions, CardMediaItem, CardSupportingContent } from '../../../../components/react-material-design';

const corgiPic2 = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg';
const styles2 = {
    width: '30vw',
};
const Root = () =>
    (<div>
        <h1>Welcome</h1>
        <p>Development and examples are a work in progress...</p>
        <p>
        React Material Design is React components for material-components/material-components-webs
         foundation/adapter classes. Our web projects use React, and Google
         Material Design theories. We decided contribute to the project that
         best adheres to Material Design guidelines. Plus Material Components is
         developed by a core team of engineers and UX designers at Google.
    </p>
        <h1>Getting Started</h1>
        <p>To install run <code>yarn add react-material-design</code> for your existing react project.</p>
        <p>React Material Design Components can be added like so <code>import {'{'} FAB {'}'} from 'react-material-design';</code></p>
        <h2>Exploring this site</h2>
        <p>We have made this site interactive. You should be able to see examples of components as well as modify the example on the fly.</p>
        <h2>Interactive demo</h2>
        <p>Try it out</p>
        <ul>
            <li>Below click expand, and you will see the underlying code to create a <code>Card</code></li>
            <li>For CardMediaItem change title to something fun, like "I was Here"</li>
            <li>In CardActions add property <code>vertical</code>.</li>
            <li>For the first Button add property <code>disabled</code>.</li>
        </ul>
        <Playground
          collapsableCode
          codeText={jsxToString(
              <code>
                  <Card style={styles2}>
                      <CardMediaItem
                        subtitle="Subtitle Here"
                        title="Title Here"
                        imgSrc={corgiPic2}
                      />
                      <CardActions bottom >
                          <Button compact label="Action 1" />
                          <Button compact label="Action 2" />
                      </CardActions>
                  </Card>
              </code>)}
          scope={{ React, Button, Card, CardMediaItem, CardSupportingContent, CardActions }}
        />
    </div>);

export default Root;
