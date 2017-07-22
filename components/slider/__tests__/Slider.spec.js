import React from 'react';
import { shallow } from 'enzyme';
import Slider from '../index';

describe('<Slider />', () => {
    it('should render', () => {
        const slider = shallow(
            <Slider />,
    );
        expect(slider).toMatchSnapshot();
    });

    it('shound render with initialValue', () => {
        const initialValue = 50;
        const select = shallow(
            <Slider initialValue={initialValue} />,
      );
        expect(select).toMatchSnapshot();
    });

    it('shound render disabled', () => {
        const disabled = true;
        const select = shallow(
            <Slider disabled={disabled} />,
    );
        expect(select).toMatchSnapshot();
    });
});
