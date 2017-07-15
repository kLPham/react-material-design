import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem';

describe('<ListItem />', () => {
    it('should render a basic list item', () => {
        const value = 'Single-line item';
        const listItem = shallow(
            <ListItem value={value} />,
        );
        expect(listItem).toMatchSnapshot();
    });
    it('should render start (left) detail elements', () => {
        const value = 'Wi-Fi';
        const leftIcon = 'network_wifi';
        const listItem = shallow(
            <ListItem value={value} icon={leftIcon} />,
        );
        expect(listItem).toMatchSnapshot();
    });
    it('should render start (left) detail avatar', () => {
        const value = 'George Washington';
        const avatarSrc = 'http://4vector.com/i/free-vector-george-washington-clip-art_108422_George_Washington_clip_art_hight.png';
        const listItem = shallow(
            <ListItem value={value} avatarSrc={avatarSrc} />,
        );
        expect(listItem).toMatchSnapshot();
    });
    it('should render end (right) detail elements', () => {
        const value = 'Janet Perkins';
        const iconRight = 'favorite';
        const rightTitle = 'Remove from favorites';
        const listItem = shallow(
            <ListItem value={value} iconRight={iconRight} rightTitle={rightTitle} />,
        );
        expect(listItem).toMatchSnapshot();
    });
    it('should render two-line list item', () => {
        const value = 'Item 1';
        const secondaryValue = 'Secondary Value 1';
        const listItem = shallow(
            <ListItem value={value} secondaryValue={secondaryValue} />,
      );
        expect(listItem).toMatchSnapshot();
    });
});
