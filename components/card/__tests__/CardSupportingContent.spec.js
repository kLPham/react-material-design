import React from 'react';
import { shallow } from 'enzyme';
import CardSupportingContent from '../cardSupportingContent';

describe('<CardSupportingContent />', () => {
    it('should render', () => {
        const cardSupportingContent = shallow(
            <CardSupportingContent>Text</CardSupportingContent>,
    );
        expect(cardSupportingContent).toMatchSnapshot();
    });
});
