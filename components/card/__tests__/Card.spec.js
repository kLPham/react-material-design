import React from 'react';
import { shallow } from 'enzyme';
import Card from '../index';
import CardTitle from '../cardTitle';

describe('<Card />', () => {
    it('should render', () => {
        const card = shallow(
            <Card>
                <CardTitle title="title" />
            </Card>,
    );
        expect(card).toMatchSnapshot();
    });
});
