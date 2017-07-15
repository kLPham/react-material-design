import React from 'react';
import { shallow } from 'enzyme';
import CardActions from '../cardActions';

describe('<CardActions />', () => {
    it('should render', () => {
        const cardActions = shallow(
            <CardActions><button>Click</button></CardActions>,
    );
        expect(cardActions).toMatchSnapshot();
    });
    it('should render vertical', () => {
        const vertical = true;
        const cardActions = shallow(
            <CardActions vertical={vertical}><button>Click</button></CardActions>,
    );
        expect(cardActions).toMatchSnapshot();
    });
});
