import React from 'react';
import { shallow } from 'enzyme';
import FormField from '../index';

describe('<FormField />', () => {
    it('should render', () => {
        const formField = shallow(
            <FormField>
                <button>Click</button>
            </FormField>,
    );
        expect(formField).toMatchSnapshot();
    });
    it('should render with alignEnd', () => {
        const alignEnd = true;
        const formField = shallow(
            <FormField alignEnd={alignEnd}>
                <button>Click</button>
            </FormField>,
    );
        expect(formField).toMatchSnapshot();
    });
});
