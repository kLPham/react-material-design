import React from 'react';
import { shallow } from 'enzyme';
import CardTitle from '../cardTitle';

describe('<CardTitle />', () => {
    it('should render', () => {
        const title = 'this is my title';
        const cardTitle = shallow(
            <CardTitle title={title} />,
    );
        expect(cardTitle).toMatchSnapshot();
    });
    it('should render with subtitle', () => {
        const title = 'this is my title';
        const subtitle = 'this is my subtitle';
        const cardTitle = shallow(
            <CardTitle title={title} subtitle={subtitle} />,
    );
        expect(cardTitle).toMatchSnapshot();
    });
    it('should render larger', () => {
        const title = 'this is my title';
        const larger = true;
        const cardTitle = shallow(
            <CardTitle title={title} larger={larger} />,
    );
        expect(cardTitle).toMatchSnapshot();
    });
});
