import React from 'react';
import { shallow } from 'enzyme';
import CardMedia from '../cardMedia';

describe('<CardMedia />', () => {
    it('should render', () => {
        const src = 'http://google.com/image.jpeg';
        const cardMedia = shallow(
            <CardMedia src={src} />,
    );
        expect(cardMedia).toMatchSnapshot();
    });
    it('should render with children', () => {
        const src = 'http://google.com/image.jpeg';
        const cardMedia = shallow(
            <CardMedia src={src}>Text</CardMedia>,
    );
        expect(cardMedia).toMatchSnapshot();
    });
});
