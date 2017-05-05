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
        expect(listItem).toHaveClassName('mdc-list-item');
        expect(listItem).toHaveText(value);
    });
    it('should render start (left) detail elements', () => {
        const value = 'Wi-Fi';
        const leftIcon = 'network_wifi';
        const listItem = shallow(
            <ListItem value={value} icon={leftIcon} />,
        );
        expect(listItem).toMatchSnapshot();
        expect(listItem).toHaveClassName('mdc-list-item');
        expect(listItem.find('i')).toBePresent();
        expect(listItem.find('i')).toHaveClassName('mdc-list-item__start-detail material-icons');
        expect(listItem.find('i')).toHaveText(leftIcon);
    });
    it('should render start (left) detail avatar', () => {
        const value = 'George Washington';
        const leftAvatarUrl = 'http://4vector.com/i/free-vector-george-washington-clip-art_108422_George_Washington_clip_art_hight.png';
        const listItem = shallow(
            <ListItem value={value} leftAvatarUrl={leftAvatarUrl} />,
        );
        expect(listItem).toMatchSnapshot();
        expect(listItem).toHaveClassName('mdc-list-item');
        expect(listItem.find('li')).toHaveText(value);
        expect(listItem.find('img')).toBePresent();
        expect(listItem.find('img')).toHaveClassName('mdc-list-item__start-detail');
        expect(listItem.find('img')).toHaveProp('src');
    });
    it('should render end (right) detail elements', () => {
        const value = 'Janet Perkins';
        const rightIcon = 'favorite';
        const rightTitle = 'Remove from favorites';
        const listItem = shallow(
            <ListItem value={value} rightIcon={rightIcon} rightTitle={rightTitle} />,
        );
        expect(listItem).toMatchSnapshot();
        expect(listItem).toHaveClassName('mdc-list-item');
        expect(listItem.find('a')).toBePresent();
        expect(listItem.find('a')).toHaveClassName('mdc-list-item__end-detail material-icons');
        expect(listItem.find('a')).toHaveText(rightIcon);
        expect(listItem.find('a')).toHaveProp('title');
    });
});
