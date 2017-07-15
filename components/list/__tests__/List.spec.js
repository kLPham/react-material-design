import React from 'react';
import { shallow } from 'enzyme';
import List from '../index';
import ListItem from '../ListItem';

describe('<List />', () => {
    it('should render with basic li', () => {
        const list = shallow(
            <List>
                <ListItem value="Item One" />
                <ListItem value="Item Two" />
                <ListItem value="Item Two" />
            </List>,
        );
        expect(list).toMatchSnapshot();
    });
    it('should render dense with basic li', () => {
        const dense = true;
        const list = shallow(
            <List dense={dense}>
                <ListItem value="Item One" />
                <ListItem value="Item Two" />
                <ListItem value="Item Two" />
            </List>,
        );
        expect(list).toMatchSnapshot();
    });
    it('should render avatar with avatar li', () => {
        const list = shallow(
            <List>
                <ListItem avatarSrc="http://4vector.com/i/free-vector-george-washington-clip-art_108422_George_Washington_clip_art_hight.png" value="George Washington" />
                <ListItem avatarSrc="https://www.goodfreephotos.com/albums/vector-images/abraham-lincoln-vector-clipart.png" value="Abraham Lincoln" />
                <ListItem avatarSrc="http://png-4.vector.me/files/images/4/4/448988/marco_simoncelli_vector_portrait_thumb.gif" value="Marco Simoncelli" />
            </List>
        ,
        );
        expect(list).toMatchSnapshot();
    });
    it('should render two-line list', () => {
        const list = shallow(
            <List>
                <ListItem value="Item 1" secondaryValue="Secondary Value 1" />
            </List>,
      );
        expect(list).toMatchSnapshot();
    });
});
