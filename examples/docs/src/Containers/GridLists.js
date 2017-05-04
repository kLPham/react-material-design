import React from 'react';
import { parse } from 'react-docgen';
import Docs from '../Components/docs';

import { GridList, GridTile } from '../../../../components/react-material-design';
import GridListDoc from '!raw-loader!../../../../components/gridList';
import GridTileDoc from '!raw-loader!../../../../components/gridList/gridTile';
const parsedGridListDoc = parse(GridListDoc);
const parsedGridTileDoc = parse(GridTileDoc);
const img = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg';
const GridLists = () =>
    <div>
        <h2>Grid Lists</h2>
        <GridList headerCaption>
            <GridTile src={img} />
            <GridTile src={img} title="Second" icon="star_border" />
            <GridTile src={img} title="First" supportText="Support Text" />
            <GridTile src={img} title="First" icon="star_border" supportText="Support Text" />
        </GridList>
        <Docs componentDocs={parsedGridListDoc} />
        <Docs componentDocs={parsedGridTileDoc} />
    </div>;
export default GridLists;
