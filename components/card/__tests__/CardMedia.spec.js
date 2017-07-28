import React from 'react';
import { shallow } from 'enzyme';
import CardMedia from '../cardMedia';

describe('<CardMedia />', () => {
    it('should render', () => {
        const src = 'http://google.com/image.jpeg';
        const cardMedia = shallow(
            <CardMedia>
                <img src={src} />
            </CardMedia>,
    );
        expect(cardMedia).toMatchSnapshot();
    });
    it('should render with children', () => {
        const cardMedia = shallow(
            <CardMedia>Text</CardMedia>,
    );
        expect(cardMedia).toMatchSnapshot();
    });
});
