import React from 'react';
import { shallow } from 'enzyme';
import CardMediaItem from '../cardMediaItem';

describe('<CardMediaItem />', () => {
    it('should render', () => {
        const imgSrc = 'http://google.com/image.jpeg';
        const cardMediaItem = shallow(
            <CardMediaItem imgSrc={imgSrc} />,
    );
        expect(cardMediaItem).toMatchSnapshot();
    });
    it('should render with a title', () => {
        const imgSrc = 'http://google.com/image.jpeg';
        const title = 'this is my title';
        const cardMediaItem = shallow(
            <CardMediaItem imgSrc={imgSrc} title={title} />,
    );
        expect(cardMediaItem).toMatchSnapshot();
    });
    it('should render with imgSize', () => {
        const imgSrc = 'http://google.com/image.jpeg';
        const imgSize = 1.5;
        const cardMediaItem = shallow(
            <CardMediaItem imgSrc={imgSrc} imgSize={imgSize} />,
    );
        expect(cardMediaItem).toMatchSnapshot();
    });
    it('should render with children', () => {
        const imgSrc = 'http://google.com/image.jpeg';
        const cardMediaItem = shallow(
            <CardMediaItem imgSrc={imgSrc}>Text</CardMediaItem>,
    );
        expect(cardMediaItem).toMatchSnapshot();
    });
});
