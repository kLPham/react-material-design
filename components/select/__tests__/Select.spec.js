import React from 'react';
import { shallow } from 'enzyme';
import Select from '../index';

describe('<Select />', () => {
    it('should render', () => {
        const select = shallow(
            <Select />,
    );
        expect(select).toMatchSnapshot();
    });
    it('should render disabled', () => {
        const disable = true;
        const select = shallow(
            <Select disable={disable} />,
      );
        expect(select).toMatchSnapshot();
    });
});
