import React from 'react';
import { shallow } from 'enzyme';
import GridTile from '../gridTile';

const img = 'https://static.pexels.com/photos/58997/pexels-photo-58997.jpeg';

describe('<GridTile />', () => {
    it('should be able to render without a title', () => {
        const gridTile = shallow(
            <GridTile src={img} />,
    );
        expect(gridTile).toMatchSnapshot();
    });
    it('should be able to render a title', () => {
        const title = 'This is my title';
        const gridTile = shallow(
            <GridTile src={img} title={title} />,
      );
        expect(gridTile).toMatchSnapshot();
    });
    it('should be able to render an icon', () => {
        const title = 'This is my title';
        const icon = 'menu';
        const gridTile = shallow(
            <GridTile src={img} title={title} icon={icon} />,
    );
        expect(gridTile).toMatchSnapshot();
    });
    it('should be able to render support text', () => {
        const title = 'This is my title';
        const supportText = 'This is my support text.';
        const gridTile = shallow(
            <GridTile src={img} title={title} supportText={supportText} />,
    );
        expect(gridTile).toMatchSnapshot();
    });
    it('should be able to render icon and support text', () => {
        const title = 'This is my title';
        const icon = 'menu';

        const supportText = 'This is my support text.';
        const gridTile = shallow(
            <GridTile src={img} title={title} icon={icon} supportText={supportText} />,
    );
        expect(gridTile).toMatchSnapshot();
    });
});
