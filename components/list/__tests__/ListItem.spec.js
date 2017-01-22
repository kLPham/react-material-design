import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem';

describe('<ListItem />', () => {
    it('should render a basic list item', () => {
        const value = 'Single-line item';
        const wrapper = shallow(
            <ListItem value={value} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveClassName('mdc-list-item');
        expect(wrapper).toHaveText(value);
    });
    it('should render start (left) detail elements', () => {
        const value = 'Wi-Fi';
        const leftIcon = 'network_wifi';
        const wrapper = shallow(
            <ListItem value={value} icon={leftIcon} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveClassName('mdc-list-item');
        expect(wrapper.find('i')).toBePresent();
        expect(wrapper.find('i')).toHaveClassName('mdc-list-item__start-detail material-icons');
        expect(wrapper.find('i')).toHaveText(leftIcon);
    });
    it('should render start (left) detail avatar', () => {
        const value = 'George Washington';
        const leftAvatarUrl = 'http://4vector.com/i/free-vector-george-washington-clip-art_108422_George_Washington_clip_art_hight.png';
        const wrapper = shallow(
            <ListItem value={value} leftAvatarUrl={leftAvatarUrl} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveClassName('mdc-list-item');
        expect(wrapper.find('li')).toHaveText(value);
        expect(wrapper.find('img')).toBePresent();
        expect(wrapper.find('img')).toHaveClassName('mdc-list-item__start-detail');
        expect(wrapper.find('img')).toHaveProp('src');
    });
    it('should render end (right) detail elements', () => {
        const value = 'Janet Perkins';
        const rightIcon = 'favorite';
        const rightTitle = 'Remove from favorites';
        const wrapper = shallow(
            <ListItem value={value} rightIcon={rightIcon} rightTitle={rightTitle} />,
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toHaveClassName('mdc-list-item');
        expect(wrapper.find('a')).toBePresent();
        expect(wrapper.find('a')).toHaveClassName('mdc-list-item__end-detail material-icons');
        expect(wrapper.find('a')).toHaveText(rightIcon);
        expect(wrapper.find('a')).toHaveProp('title');
    });
});
