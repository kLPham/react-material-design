import React from 'react';
import { shallow } from 'enzyme';
import GridList from '../index';
import GridTile from '../gridTile';

const img = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg';

describe('<GridList />', () => {
    it('should be able to render', () => {
        const gridList = shallow(
            <GridList>
                <GridTile src={img} />
                <GridTile src={img} />
            </GridList>,
);
        expect(gridList).toMatchSnapshot();
    });
    it('should be able to display header caption', () => {
        const supportText = 'This is my support text.';
        const headerCaption = true;
        const gridList = shallow(
            <GridList headerCaption={headerCaption}>
                <GridTile src={img} />
                <GridTile src={img} supportText={supportText} />
            </GridList>,
          );
        expect(gridList).toMatchSnapshot();
    });
    it('should be able to display two line caption', () => {
        const supportText = 'This is my support text.';
        const gridList = shallow(
            <GridList>
                <GridTile src={img} />
                <GridTile src={img} supportText={supportText} />
            </GridList>,
          );
        expect(gridList).toMatchSnapshot();
    });
    it('should be able to display icon', () => {
        const supportText = 'This is my support text.';
        const icon = 'menu';

        const gridList = shallow(
            <GridList>
                <GridTile src={img} icon={icon} />
                <GridTile src={img} supportText={supportText} />
            </GridList>,
          );
        expect(gridList).toMatchSnapshot();
    });
});
