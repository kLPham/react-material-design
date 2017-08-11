import React from 'react';
import _ from 'lodash';
import jsxToString from 'jsx-to-string';
import Playground from 'component-playground';
import componentDoc from '../docs/componentDoc.json';
import Docs from '../Components/docs';

import { GridList, GridTile } from '../../../../components/react-material-design';

const docs = _.pickBy(componentDoc, (value, key) => _.startsWith(key, '../../components/grid-list/'));
const docsComponent = _.map(docs, (doc, key) => <Docs key={key} componentDocs={doc} />);

const img = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg';
const GridLists = () =>
  (<div>
      <h2>Grid Lists</h2>
      <Playground
        collapsableCode
        codeText={jsxToString(
            <code>
                <GridList headerCaption>
                    <GridTile src={img} />
                    <GridTile src={img} title="Second" icon="star_border" />
                    <GridTile src={img} title="First" supportText="Support Text" />
                    <GridTile src={img} title="First" icon="star_border" supportText="Support Text" />
                </GridList>
            </code>)}
        scope={{ React, GridList, GridTile }}
      />
      {docsComponent}
  </div>);
export default GridLists;
